"""Apply spec.py to one Papra KB workspace: subjects, one grounding fact per clause, req inventory, reasons.
With --base <sha> it adds the later decisions of later.json that apply to that base commit (the requirement
itself, its supersedes and restates links, the closed status of what it replaces) and, unless ids are
named, leaves the requirements that are already modeled alone.
Usage: python3 apply.py <ws> [--base <sha>] [REQ-id ...]"""
import json, os, re, subprocess, sys, yaml, hashlib
sys.path.insert(0, os.path.dirname(__file__))
from spec import SPEC, SUBJECTS
WS = os.path.abspath(sys.argv[1]); _rest = sys.argv[2:]
BASE = _rest[_rest.index('--base') + 1] if '--base' in _rest else None
only = {a for i, a in enumerate(_rest) if a != '--base' and (i == 0 or _rest[i - 1] != '--base')}
HERE = os.path.dirname(os.path.abspath(__file__))
LATER = json.load(open(os.path.join(HERE, 'later.json')))
SOURCES = {s['id']: s for s in json.load(open(os.path.join(HERE, '..', 'claims.json')))['knowledgeSources'] + LATER['knowledgeSources']}
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

def git(*a):
    return subprocess.run(['git', '-C', WS, *a], capture_output=True, text=True)

def applies(claim):
    """A later claim holds at the base when it is dated on or before the base commit and, where it names the commit that made it true, that commit is an ancestor of the base."""
    if claim['since'] > git('log', '-1', '--format=%cs', BASE).stdout.strip(): return False
    return 'commit' not in claim or git('merge-base', '--is-ancestor', claim['commit'], BASE).returncode == 0

def later_req(claim):
    """Front matter and body of a later decision, in the shape the bootstrap wrote the first 44."""
    src = SOURCES[claim['sourceId']]; st = claim['statement'].strip()
    first = re.split(r'(?<=[.!?])\s+', st)[0]
    title = first if len(first) <= 160 else first[:157].rstrip() + '…'
    body = [st, '', '## Context', '', claim.get('rationale', 'Reason not stated.'), '']
    if claim.get('why_changed'): body += ['## Why this changed', '', claim['why_changed'], '']
    body += ['## Source', '', *['> ' + l.strip() for l in claim['excerpt'].split('\n')], '', f"Source: {src['title']} - {claim['reference']}", '']
    # required_evidence as the 44 bootstrap requirements carry it: an onboarded decision is asserted by its source, not yet tested end to end.
    m = {'title': title, 'status': 'active', 'semantic_text': st, 'firmness': 'firm', 'required_evidence': 'asserted', 'origin': {'kind': 'import', 'ref': f"{src['title']}: {claim['reference']}"},
         'tags': ['bootstrap', f"knowledge-source:{claim['sourceId']}", f"component:{claim['component']}"] + ([f"rule:{claim['rule']}"] if claim.get('rule') else [])}
    if claim.get('rationale'): m['rationale'] = claim['rationale']
    return m, '\n'.join(body)

def apply_req(rid, claim=None):
    new = claim is not None and not os.path.exists(f'{KB}/requirements/{rid}.md')
    m, body = later_req(claim) if new else read_req(rid)
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
    if new:
        p.update({k: m[k] for k in ('firmness', 'required_evidence', 'origin', 'tags', 'rationale') if k in m})
        present = {f[:-3] for f in os.listdir(f'{KB}/requirements')}
        for kind in ('supersedes', 'restates'):
            links += [{'type': kind, 'from': rid, 'to': o} for o in claim.get(kind, []) if o in present]
    pay = {'type': 'req', 'id': rid, 'properties': p, 'relationships': links}
    if new or newbody != body: pay['document'] = {'body': newbody}
    must(kibi('upsert', pay), 'req ' + rid)
    if new: close_replaced(rid, claim)
    return old

def close_replaced(rid, claim):
    """What a later decision replaces is closed, keeps its own grounding, and stops owning current facts and open questions."""
    for o in claim.get('supersedes', []):
        if not os.path.exists(f'{KB}/requirements/{o}.md'): continue
        om, _ = read_req(o)
        must(kibi('upsert', {'type': 'req', 'id': o, 'properties': {'title': om['title'], 'status': 'closed'}}), 'close ' + o)
    for q in claim.get('resolves_questions', []):
        for f in os.listdir(f'{KB}/facts'):
            t = open(f'{KB}/facts/{f}').read(); fm = yaml.safe_load(t.split('---', 2)[1])
            if fm.get('text_ref') == q and 'review:open-question' in (fm.get('tags') or []) and fm.get('status') != 'deprecated':
                must(kibi('upsert', {'type': 'fact', 'id': fm['id'], 'properties': {'title': fm['title'], 'status': 'deprecated'}}), 'resolve ' + fm['id'])

def deprecate_closed_only_facts():
    """Hygiene (kb-quality.md): a fact that only closed requirements ground is deprecated, so search stops ranking its stale value."""
    status = {f[:-3]: read_req(f[:-3])[0]['status'] for f in os.listdir(f'{KB}/requirements')}
    owners = {}
    for f in os.listdir(f'{KB}/relationships'):
        for r in (yaml.safe_load(open(f'{KB}/relationships/{f}')) or {}).get('relationships', []) or []:
            if r['type'] in ('requires_property', 'requires_predicate') and r['from'] in status: owners.setdefault(r['to'], set()).add(r['from'])
    for fid, reqs in sorted(owners.items()):
        fm = yaml.safe_load(open(f'{KB}/facts/{fid}.md').read().split('---', 2)[1])
        if all(status[r] == 'closed' for r in reqs) and fm.get('status') == 'active':
            must(kibi('upsert', {'type': 'fact', 'id': fid, 'properties': {'title': fm['title'], 'status': 'deprecated'}}), 'deprecate ' + fid)
            print('deprecated', fid, flush=True)

if __name__ == '__main__':
    present = {f[:-3] for f in os.listdir(f'{KB}/requirements')}
    later = {c['id']: c for c in LATER['claims'] if BASE and applies(c)}
    for rid in SPEC:
        if (rid not in present and rid not in later) or (only and rid not in only) or (BASE and not only and rid not in later): continue
        old = apply_req(rid, later.get(rid))
        print('ok', rid, 'retracted', [o['to'] for o in old], flush=True)
    if BASE: deprecate_closed_only_facts()
