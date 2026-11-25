"""Build the chains variant of the crowded store: the crowded .kb plus a made-up history for six real decisions.

Usage: python3 chains.py <crowded .kb> <output .kb>
       python3 chains.py --roles <workspace>      rewrite chains-roles.json with the kibi on PATH

EVERY ENTRY THIS SCRIPT WRITES IS SYNTHETIC. Papra's real history of these decisions is not known to the
benchmark; the earlier versions below, their values, dates, references and reasons are made up, to test
whether an arm treats a replaced decision as current. The store text does not say so (telling the current
entry from the replaced ones is the task); this file and kb/README.md do.

What it adds, for each of six decisions the crowded arcs probe:
  - two closed requirements, oldest first, each superseded by the next; the real (current) entry
    supersedes the newer of the two. The real entry's statement, facts and links are not changed: it
    gains the "## Why this changed" section Kibi asks of a superseding decision, saying the reason is
    not stated, and `supersedes` records are appended to the relationship shards.
  - in every chain the newer closed version allows what the arc's probe asks for, so an arm that reads it
    as current changes the code; in every chain one closed version forbids what the arc's mirror control
    asks for, so an arm that reads it as current refuses compliant work.
  - in one chain (password reset) the current entry restores the value of the oldest version.
  - ids say nothing about age or status (no "-earlier", no version suffix); status and the supersedes
    links are the only signal, as for a real store.
  - each version is modeled as the real entries are: one property fact per clause, on the real entry's
    subject, deprecated with its requirement.

Deterministic: no clock, no randomness.
"""
import hashlib, json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from crowd import claim_key, dump, cap

HERE = os.path.dirname(os.path.abspath(__file__))
ROLES_FILE = os.path.join(HERE, 'chains-roles.json')
ROLES = json.load(open(ROLES_FILE)) if os.path.exists(ROLES_FILE) else {}
SOURCE = 'Papra server decision log'
TAG = 'knowledge-source:papra-server-decisions'

# current real id -> (subject, component, [versions oldest first]); a version is
# (id, recorded_at, reference, [(clause, property, value)], quote, why it replaced the version before it or None)
CHAINS = {
    'REQ-papra-max-tags-per-organization': ('tags.per_organization_limit', 'tags', [
        ('REQ-papra-organization-tag-count-cap', '2025-07-14T09:12:40.000Z', 'SRV-118',
         [('An organization can create at most 100 tags', 'max_tags', 100)],
         'Organizations are capped at 100 tags.', None),
        ('REQ-papra-organization-tags-uncapped', '2025-12-02T10:41:05.000Z', 'SRV-164',
         [('An organization can create any number of tags', 'tag_count_capped', False)],
         'Removed the cap on the number of tags in an organization.',
         'Teams importing existing archives hit the 100-tag cap on their first import.'),
    ]),
    'REQ-papra-password-reset-revokes-sessions': ('auth.password_reset', 'auth', [
        ('REQ-papra-password-reset-signs-out-everywhere', '2025-05-20T08:03:11.000Z', 'SRV-102',
         [("Resetting a password revokes all of the user's sessions", 'revokes_sessions', True)],
         'A password reset signs the user out of every device.', None),
        ('REQ-papra-password-reset-keeps-other-devices', '2025-10-07T14:26:52.000Z', 'SRV-151',
         [("Resetting a password keeps the user's other sessions signed in", 'revokes_sessions', False)],
         "A password reset no longer signs the user out of their other devices.",
         'Mobile users were signed out of the app every time they reset a forgotten password on the web.'),
    ]),
    'REQ-papra-user-owned-organization-cap': ('organizations.user_cap', 'organizations', [
        ('REQ-papra-three-organizations-per-user', '2025-04-03T11:17:28.000Z', 'SRV-094',
         [('A user can own at most 3 organizations', 'default_max_owned_organizations', 3),
          ('An instance admin cannot change the limit for an individual user', 'per_user_override_by_instance_admin', False)],
         'Each user can own up to three organizations; the limit is the same for everyone.', None),
        ('REQ-papra-organization-ownership-unlimited', '2025-09-15T16:08:44.000Z', 'SRV-147',
         [('A user can own any number of organizations', 'owned_organizations_capped', False)],
         'Lifted the limit on organizations a user can own.',
         'Agencies that keep one organization per client asked for more than three.'),
    ]),
    'REQ-papra-auth-secret-required-in-production': ('auth.secret', 'auth', [
        ('REQ-papra-auth-secret-built-in-default', '2025-03-11T09:54:02.000Z', 'SRV-087',
         [('The server uses a built-in default AUTH_SECRET when none is set', 'default_secret_allowed', True)],
         'AUTH_SECRET falls back to a built-in default.', None),
        ('REQ-papra-auth-secret-generated-at-startup', '2025-08-26T13:31:19.000Z', 'SRV-139',
         [('When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning', 'generated_when_missing', True)],
         'In production a missing AUTH_SECRET is replaced by a random one generated at startup, with a warning in the logs.',
         'A shared built-in default would let anyone sign sessions for an instance that kept it.'),
    ]),
    'REQ-papra-search-query-max-1024': ('search.query_length', 'search', [
        ('REQ-papra-search-text-256-characters', '2025-06-09T10:22:36.000Z', 'SRV-109',
         [('A search query is limited to 256 characters', 'max_characters', 256)],
         'Search text longer than 256 characters is refused.', None),
        ('REQ-papra-search-text-any-length', '2025-11-18T15:47:21.000Z', 'SRV-160',
         [('A search query can be of any length', 'length_limited', False)],
         'Removed the length limit on search text.',
         'Users combining many filters with OR ran into the 256-character limit.'),
    ]),
    'REQ-papra-signup-email-domain-restrictions': ('auth.signup_email_domains', 'auth', [
        ('REQ-papra-signup-any-email-domain', '2025-02-24T12:05:47.000Z', 'SRV-081',
         [('Anyone can sign up with an email address on any domain', 'allowlist_supported', False)],
         'Sign-up is open to every email domain.', None),
        ('REQ-papra-signup-allowed-domains-include-subdomains', '2025-10-29T09:38:14.000Z', 'SRV-156',
         [('When an allowed-domain list is configured, emails whose domain is in the list or is a subdomain of a listed domain may sign up', 'allowlist_includes_subdomains', True),
          ('Matching ignores case', 'case_sensitive', False)],
         'Instances can restrict sign-up to listed email domains; a listed domain also admits its subdomains.',
         'Self-hosted instances wanted sign-up limited to their own company.'),
    ]),
}


def slug(s):
    import re
    return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')


def render(rid, subject, component, at, ref, clauses, quote, why, status='closed'):
    statement = '; '.join(c for c, _, _ in clauses) + '.'
    inv, facts, rels, pos = [], {}, [], 0
    origin_ref = f'{SOURCE}: {ref}'
    for text, prop, val in clauses:
        start = statement.index(text, pos); pos = start + len(text); ck = claim_key(text)
        inv.append({'claim_key': ck, 'claim_text': text, 'role': ROLES.get(text, 'descriptive'), 'status': 'modeled', 'span': {'start': start, 'end': pos}, 'subjects': [subject]})
        fid = f'FACT-papra-{slug(subject)}-{slug(prop)}-{hashlib.sha256(rid.encode()).hexdigest()[:6]}'
        f = {'title': f'{subject} {prop} = {val}', 'status': 'deprecated', 'fact_kind': 'property_value', 'subject_key': subject, 'property_key': prop, 'operator': 'eq'}
        if isinstance(val, bool): f.update(value_type='bool', value_bool=val)
        elif isinstance(val, int): f.update(value_type='int', value_int=val)
        else: f.update(value_type='string', value_string=val)
        f.update(claim_key=ck, claim_text=text, text_ref=rid, tags=['lane:strict', TAG], origin={'kind': 'agent', 'ref': origin_ref, 'recorded_at': at}, id=fid, type='fact')
        facts[fid] = dump(f, f'{cap(text)}.\n\nModeled from {rid} so the claim can be checked for contradictions.\n')
        rels.append(('requires_property', rid, fid))
    subj = f'FACT-papra-subject-{slug(subject)}'
    rels.append(('constrains', rid, subj))
    body = [statement, '', '## Context', '', 'Reason not stated.', '']
    if why: body += ['## Why this changed', '', why, '']
    body += ['## Source', '', f'> {quote} ({ref})', '', f'Source: {SOURCE} - {ref}', '']
    front = {'title': statement, 'status': status, 'semantic_text': statement, 'semantic_clauses': [c for c, _, _ in clauses], 'logic_claims': [i['claim_key'] for i in inv],
             'semantic_inventory_version': 'kibi.semantic-inventory.v1', 'semantic_source_field': 'semantic_text',
             'semantic_source_hash': hashlib.sha256(statement.encode()).hexdigest(), 'semantic_inventory': inv, 'firmness': 'firm', 'required_evidence': 'asserted',
             'origin': {'kind': 'import', 'ref': origin_ref, 'recorded_at': at}, 'tags': ['bootstrap', TAG, f'component:{component}']}
    front.update(id=rid, type='req')
    return dump(front, '\n'.join(body)), facts, rels


def build(src):
    files, rels = {}, []
    for current, (subject, component, versions) in CHAINS.items():
        if not os.path.exists(os.path.join(src, 'requirements', f'{current}.md')): raise SystemExit(f'{current} is not in {src}')
        if not os.path.exists(os.path.join(src, 'facts', f'FACT-papra-subject-{slug(subject)}.md')): raise SystemExit(f'no subject fact for {subject}')
        prev = None
        for rid, at, ref, clauses, quote, why in versions:
            text, facts, rl = render(rid, subject, component, at, ref, clauses, quote, why)
            files[f'requirements/{rid}.md'] = text
            files.update({f'facts/{k}.md': v for k, v in facts.items()})
            rels += [(*r, at) for r in rl]
            if prev: rels.append(('supersedes', rid, prev, at))
            prev = rid
        rels.append(('supersedes', current, prev, '2026-11-16T13:22:12.780Z'))
        # The real entry gets the section Kibi asks of every superseding decision, with no reason made up.
        real = open(os.path.join(src, 'requirements', f'{current}.md')).read()
        if '\n## Why this changed\n' in real or '\n## Source\n' not in real: raise SystemExit(f'unexpected body in {current}')
        files[f'requirements/{current}.md'] = real.replace('\n## Source\n', f'\n## Why this changed\n\nReason not stated. This decision replaces {prev} without saying why it changed.\n\n## Source\n', 1)
    return files, rels


def write(src, out):
    import shutil, yaml
    files, rels = build(src)
    if os.path.exists(out): shutil.rmtree(out)
    shutil.copytree(src, out)
    for path, text in sorted(files.items()):
        full = os.path.join(out, path)
        if os.path.exists(full) and os.path.basename(path)[:-3] not in CHAINS: raise SystemExit(f'{path} exists in the source knowledge base')
        open(full, 'w').write(text)
    shards = {}
    for kind, a, b, at in rels:
        shards.setdefault(hashlib.sha256(a.encode()).hexdigest()[:2], []).append(
            {'id': 'rel-' + hashlib.sha256(f'{kind}|{a}|{b}'.encode()).hexdigest()[:12], 'type': kind, 'from': a, 'to': b, 'created_at': at, 'created_by': 'kibi/upsert', 'source': 'mcp://kibi/upsert'})
    for shard, records in sorted(shards.items()):
        path = os.path.join(out, 'relationships', f'{shard}.yaml')
        head = open(path).read().rstrip('\n') + '\n' if os.path.exists(path) else 'relationships:\n'
        if head.rstrip().endswith(']'):
            records = yaml.load(head, Loader=yaml.BaseLoader)['relationships'] + records; head = 'relationships:\n'
        open(path, 'w').write(head + ''.join('  - ' + '\n    '.join(f'{k}: {json.dumps(v) if k == "created_at" else v}' for k, v in rec.items()) + '\n' for rec in records))
    reqs = sum(1 for p in files if p.startswith('requirements/')) - len(CHAINS)
    print(f'{reqs} closed requirements in {len(CHAINS)} chains, {len(files) - reqs - len(CHAINS)} facts, {len(rels)} relationships -> {out}')


if __name__ == '__main__':
    args = sys.argv[1:]
    if args and args[0] == '--roles':
        import subprocess
        out = {}
        for _, (_, _, versions) in CHAINS.items():
            for _, _, _, clauses, _, _ in versions:
                statement = '; '.join(c for c, _, _ in clauses) + '.'
                p = subprocess.run(['kibi', 'model', '--input', '-'], input=json.dumps({'mode': 'analyze', 'text': statement, 'clauses': [c for c, _, _ in clauses]}), cwd=args[1], capture_output=True, text=True, timeout=600)
                props = json.loads(p.stdout.strip().splitlines()[0])['data']['receipt']['propositions']
                if [x['claim_text'] for x in props] != [c for c, _, _ in clauses]: raise SystemExit(f'the advisor splits {statement!r} differently: {[x["claim_text"] for x in props]}')
                out.update({x['claim_text']: x['role'] for x in props if x['role'] != 'descriptive'})
        json.dump(dict(sorted(out.items())), open(ROLES_FILE, 'w'), indent=1); open(ROLES_FILE, 'a').write('\n')
        print(f'{len(out)} clauses not descriptive -> {ROLES_FILE}')
    elif len(args) == 2: write(*args)
    else: raise SystemExit(__doc__)
