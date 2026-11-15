"""Apply spec.py to one Papra KB workspace: subjects, one grounding fact per clause, req inventory, reasons.
Usage: python3 apply.py <ws> [REQ-id ...]"""
import json, os, re, subprocess, sys, yaml, hashlib
sys.path.insert(0, os.path.dirname(__file__))
from spec import SPEC, SUBJECTS
WS = os.path.abspath(sys.argv[1]); only = set(sys.argv[2:])
REASONS = json.load(open(os.path.join(os.path.dirname(__file__), 'reasons.json')))
KB = os.path.join(WS, '.kb')
LOG = open(os.path.join(WS, '..', 'apply-' + os.path.basename(WS) + '.log'), 'a')

def kibi(cmd, payload):
    p = subprocess.run(['kibi', cmd, '--input', '-'], input=json.dumps(payload), cwd=WS, capture_output=True, text=True, timeout=600)
    out = p.stdout.strip().splitlines()
    try: d = json.loads(out[0]) if out else {'status': 'error', 'error': p.stderr[-800:]}
    except Exception: d = {'status': 'error', 'error': p.stdout[-800:] + p.stderr[-800:]}
    LOG.write(json.dumps({'cmd': cmd, 'id': payload.get('id'), 'status': d.get('status'), 'error': d.get('error')}) + '\n'); LOG.flush()
    return d

def must(d, what):
    if d.get('status') != 'success':
        raise SystemExit(f'FAILED {what}: {json.dumps(d.get("error") or d.get("diagnostics"))[:2500]}')
    return d

def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')

def read_req(rid):
    t = open(f'{KB}/requirements/{rid}.md').read(); _, fm, body = t.split('---', 2)
    return yaml.safe_load(fm), body.lstrip('\n')

def rels_from(rid):
    out = []
    for f in os.listdir(f'{KB}/relationships'):
        for r in (yaml.safe_load(open(f'{KB}/relationships/{f}')) or {}).get('relationships', []) or []:
            if r.get('from') == rid: out.append(r)
    return out

done_subjects = set()
def ensure_subject(key):
    fid = f'FACT-papra-subject-{slug(key)}'
    if key in done_subjects: return fid
    title, ref, body = SUBJECTS[key]
    must(kibi('upsert', {'type': 'fact', 'id': fid, 'properties': {'title': title, 'status': 'active', 'fact_kind': 'subject', 'subject_key': key, 'canonical_key': key,
         'tags': ['lane:strict', 'knowledge-source:papra'], 'origin': {'kind': 'agent', 'ref': ref}}, 'document': {'body': body}}), 'subject ' + key)
    done_subjects.add(key); return fid

def fact_payload(rid, ref, claim, model):
    kind = model[0]
    if kind == 'perm':
        _, actor, action, resource, decision, subj = model
        fid = f'FACT-papra-perm-{slug(actor)}-{slug(action)}-{slug(resource)}'
        props = {'title': f'{actor} {action} {resource}: {decision}', 'status': 'active', 'fact_kind': 'predicate', 'predicate_name': 'permission_rule',
                 'predicate_args': [actor, action, resource, decision], 'polarity': 'assert', 'canonical_key': f'permission_rule({actor},{action},{resource},{decision})'}
        return fid, 'requires_predicate', subj, props
    _, subj, prop, val = model
    fid = f'FACT-papra-{slug(subj)}-{slug(prop)}'
    props = {'title': f'{subj} {prop} = {val}', 'status': 'active', 'fact_kind': 'property_value', 'subject_key': subj, 'property_key': prop, 'operator': 'eq'}
    if kind == 'b': props.update(value_type='bool', value_bool=val)
    elif kind == 'i': props.update(value_type='int', value_int=val)
    else: props.update(value_type='string', value_string=val)
    return fid, 'requires_property', subj, props

def apply_req(rid):
    m, body = read_req(rid)
    text = m['semantic_text']; clauses = SPEC[rid]
    ana = must(kibi('model', {'mode': 'analyze', 'text': text, 'clauses': [c for c, _ in clauses]}), 'analyze ' + rid)
    props_ = ana['data']['receipt']['propositions']
    if len(props_) != len(clauses): raise SystemExit(f'{rid}: {len(props_)} propositions for {len(clauses)} clauses')
    ref = (m.get('origin') or {}).get('ref')
    inv, links, claim_keys = [], [], []
    for (clause, model), pr in zip(clauses, props_):
        fid, rtype, subj, fprops = fact_payload(rid, ref, clause, model)
        if pr['role'] == 'example':
            inv.append({'claim_key': pr['claim_key'], 'claim_text': pr['claim_text'], 'role': 'example', 'status': 'nonlogical', 'span': pr['span']}); continue
        sfid = ensure_subject(subj)
        fprops.update(claim_key=pr['claim_key'], claim_text=pr['claim_text'], text_ref=rid, tags=['lane:strict', 'knowledge-source:papra'],
                      origin={'kind': 'agent', 'ref': ref})
        must(kibi('upsert', {'type': 'fact', 'id': fid, 'properties': fprops,
                             'document': {'body': f'{clause[0].upper() + clause[1:]}.\n\nModeled from {rid} so the claim can be checked for contradictions.\n'}}), 'fact ' + fid)
        inv.append({'claim_key': pr['claim_key'], 'claim_text': pr['claim_text'], 'role': pr['role'], 'status': 'modeled', 'span': pr['span'], 'subjects': [subj]})
        links.append({'type': rtype, 'from': rid, 'to': fid})
        if rtype == 'requires_property' and {'type': 'constrains', 'from': rid, 'to': sfid} not in links: links.append({'type': 'constrains', 'from': rid, 'to': sfid})
        claim_keys.append(pr['claim_key'])
    # retract old grounding and constrains links that the new model does not keep
    keep = {(l['type'], l['to']) for l in links}
    old = [{'type': r['type'], 'from': rid, 'to': r['to']} for r in rels_from(rid)
           if r['type'] in ('requires_property', 'requires_predicate', 'requires_rule', 'constrains') and (r['type'], r['to']) not in keep]
    if old: must(kibi('delete', {'relationships': old}), 'retract ' + rid)
    reason = REASONS.get(rid)
    newbody = body
    if reason:
        newbody = re.sub(r'(## Context\n\n)(.*?)(\n\n## )', lambda mm: mm.group(1) + reason + mm.group(3), body, count=1, flags=re.S)
    p = {'title': m['title'], 'status': m['status'], 'semantic_text': text, 'semantic_clauses': [c for c, _ in clauses], 'logic_claims': claim_keys,
         'semantic_inventory_version': 'kibi.semantic-inventory.v1', 'semantic_source_field': 'semantic_text',
         'semantic_source_hash': ana['data']['receipt']['inventory_contract']['source_hash'], 'semantic_inventory': inv}
    if reason: p['rationale'] = reason
    pay = {'type': 'req', 'id': rid, 'properties': p, 'relationships': links}
    if newbody != body: pay['document'] = {'body': newbody}
    must(kibi('upsert', pay), 'req ' + rid)
    return old

if __name__ == '__main__':
    present = {f[:-3] for f in os.listdir(f'{KB}/requirements')}
    for rid in SPEC:
        if rid not in present or (only and rid not in only): continue
        old = apply_req(rid)
        print('ok', rid, 'retracted', [o['to'] for o in old], flush=True)
