"""Build the in-product variant of a stored Papra knowledge base: half of the crowd, plus look-alikes about Papra's server.

Usage: python3 inproduct.py <hide-why .kb> <output .kb>
       python3 inproduct.py --true-only <source .kb> <output .kb>   the same in-product entries with no crowd at all:
                                                     every entry of the store is true (set 5, store `true-only`)
       python3 inproduct.py --list                    the in-product entries: id, linked symbol, statement
       python3 inproduct.py --roles <workspace>       rewrite inproduct-roles.json with the kibi on PATH

The crowded store's look-alikes all name another product in their id and title, so one glance sorts
them out. This variant replaces half of them with decisions about apps/papra-server itself, some linked
to the same files as the governing decisions.

What it writes, on top of the source store (copied byte for byte except symbols.yaml):
  - Half of crowd.py's generated entries: the subjects whose hash is even, each with all of its entries
    (an earlier, superseded value stays with the entry that replaced it). These are synthetic, as crowd.py
    says.
  - One requirement per selected Papra server unit test (papra-test-titles.json, the titles of every test
    in apps/papra-server at the base commit). THESE ARE TRUE: each states, in the test's words, behaviour
    the server's own test suite checks at the base commit. Nothing about them is made up but the record
    around them (id, reference number, date).
  - Titles that restate one of the nine decisions the in-product arcs probe are left out (EXCLUDE), so
    the governing entry of every probe is still the only entry that governs it. Every compliant control
    of those arcs passes the full regression suite, which contains these tests, so no entry here can
    forbid a control.
  - An entry is linked (`implements` on the symbol, in symbols.yaml) when the tested source file has a
    symbol named by one of the test's describe() blocks. A file keeps at most MAX_PER_FILE linked decisions in all, the densest real file holding 15.
  - Each entry is modeled as the real ones are: one property fact on a subject named after the tested
    symbol, so `kibi check` has nothing new to report about it.

Deterministic: no clock, no randomness.
"""
import hashlib, json, os, re, shutil, sys, yaml
HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, HERE)
import crowd
from crowd import claim_key, dump, cap

ROLES_FILE = os.path.join(HERE, 'inproduct-roles.json')
ROLES = json.load(open(ROLES_FILE)) if os.path.exists(ROLES_FILE) else {}
TITLES = json.load(open(os.path.join(HERE, 'papra-test-titles.json')))
SOURCE = 'Papra server behaviour notes'
TAG = 'knowledge-source:papra-server-tests'
MAX_PER_FILE = 30
TARGET = 580  # about half of the crowd's 1,165 generated requirements

# Modules whose tests are about tooling, not product behaviour.
SKIP_FILES = re.compile(r'^src/(migrations|scripts)/|^src/modules/(shared|kv-store)/')

# Titles that restate a decision an in-product arc probes (the nine of the crowded set), by test file and
# describe() path or by wording. Matching is on "file | describe path | title", lowercased.
EXCLUDE = [
    # tags per organization cap (tags-per-workspace-cap)
    r'tags\.usecases\.test.*(limit)', r'tag limit', r'max.*tags', r'tags? per organization',
    # tag names unique regardless of case (tags-letter-case)
    r'normalizetagname', r'normaliz', r'same name', r'lowercas', r'\bcase\b', r'case-insensitive',
    # owned organization cap (owned-workspaces-cap)
    r'max(imum)? organization', r'organization count', r'more organizations', r'organizations a user can create',
    # auth secret required in production (auth-secret-production)
    r'auth secret', r'auth_secret',
    # sign-up domain restrictions (signup-domain-exact)
    r'isemaildomainallowed', r'domainlistschema', r'email domain', r'allowlist', r'subdomain', r'forbidden domain',
    # password reset revokes sessions (password-reset-sessions)
    r'password reset', r'reset password', r'revoke', r'sessions? (are|is) (deleted|ended|invalidated)',
    # name: and content: filters use contains matching (search-name-contains)
    r'(query-builder|search).*contains', r'name column', r'content column', r'for name filters', r'for content filters', r'exact match',
    # an invalid date in a created: filter is ignored (search-created-typo)
    r'query-builder.*invalid date', r'query-builder.*date filtering', r'created:', r'created filter', r'(query-builder|search).*created',
    # search query length (search-query-length)
    r'1024', r'query length', r'too long', r'exceeds? \d+ characters', r'characters long',
]
EXCLUDE_RE = re.compile('|'.join(f'(?:{x})' for x in EXCLUDE))
CONDITION = re.compile(r'^(when|if|given|with|for|after|before|once|while|on)\b', re.I)
IDENT = re.compile(r'^[A-Za-z_$][A-Za-z0-9_$]*$')
STOP = set('a an the of to in on for and or is are be by with from as at it its this that when if then not no '
           'handle build create get check ensure models repository usecases services service schema schemas query result'.split())

def slug(s): return re.sub(r'[^a-z0-9]+', '-', s.lower()).strip('-')
def snake(s): return re.sub(r'(?<=[a-z0-9])(?=[A-Z])', '_', s).lower().replace('-', '_').replace('.', '_')
def words(s): return {w[:-3] if w.endswith('ing') and len(w) > 5 else w.rstrip('s') for w in re.findall(r'[a-z0-9]+', re.sub(r'(?<=[a-z0-9])(?=[A-Z])', ' ', s).lower())} - STOP
def h(s): return int(hashlib.sha256(s.encode()).hexdigest()[:12], 16)

def module_of(path):
    parts = path.split('/')
    if parts[1] == 'modules':
        m = parts[2]
        if m == 'documents' and 'document-search' in parts: return 'document-search'
        if m == 'app' and len(parts) > 4: return parts[3]
        return m
    return parts[1]

def statement_of(t):
    """The test title, with the describe() conditions it reads under: "When X, <title>"."""
    conds = [a for a in t['anc'][1:] if CONDITION.match(a) and ',' not in a and len(a.split()) <= 10]  # anc: outermost describe() first
    text = ' '.join(t['title'].split())
    if conds: text = ', '.join(conds + [text])
    return cap(text.rstrip('.:,; '))

def candidates(skip_rationale=True):
    seen, out = set(), []
    for t in TITLES:
        if SKIP_FILES.search(t['file']) or '\n' in t['title']: continue
        st = statement_of(t)
        if len(st.split()) < 6 or st.lower() in seen or not st.isascii(): continue
        if skip_rationale and ROLES.get(st) == 'rationale': continue  # a reason, not a behaviour ("... because ..."): Kibi would model it as non-logical
        if EXCLUDE_RE.search(f"{t['file']} | {' > '.join(t['anc'])} | {t['title']}".lower()): continue
        seen.add(st.lower()); out.append((t, st))
    return out

def symbols_by_file(sym):
    by = {}
    for s in sym: by.setdefault(s['sourceFile'], []).append(s)
    return by

def link_for(t, st, by):
    """The symbol a test names, in the source file it tests, or None."""
    if '/e2e/' in t['file'] or '.e2e.' in t['file']: return None
    src = 'apps/papra-server/' + re.sub(r'\.test\.ts$', '.ts', t['file'])
    syms = by.get(src, [])
    named = [s for s in syms if s['title'] in t['anc']]
    return named[0] if named else None

def select(sym):
    """[(test, statement, symbol or None)]: the entries of the governed modules first, then the rest by hash, TARGET in all."""
    by = symbols_by_file(sym)
    real_links = {f: sum(1 for s in ss for r in s.get('relationships', []) if r['type'] == 'implements') for f, ss in by.items()}
    governed = {'tags', 'auth', 'organizations', 'document-search', 'documents', 'users', 'config'}
    cands = sorted(candidates(), key=lambda c: (module_of(c[0]['file']) not in governed, h(c[1])))[:TARGET]
    out, per_file = [], dict(real_links)
    for t, st in sorted(cands, key=lambda c: (c[0]['file'], c[1])):
        s = link_for(t, st, by)
        if s is not None:
            if per_file.get(s['sourceFile'], 0) >= MAX_PER_FILE: s = None
            else: per_file[s['sourceFile']] = per_file.get(s['sourceFile'], 0) + 1
        out.append((t, st, s))
    return out

def entry_id(t, st, used):
    words_ = slug(re.sub(r'^(when|if|given)\b', '', t['title'].strip(), flags=re.I)).split('-')
    base = f"REQ-papra-{module_of(t['file'])}-" + '-'.join([w for w in words_ if w not in {'a', 'an', 'the'}][:7])
    rid, n = base, 2
    while rid in used: rid, n = f'{base}-{n}', n + 1
    used.add(rid); return rid

def stamp(key):
    x = h('inproduct|' + key); month = x % 20; y, mo = 2025 + (month + 1) // 12, (month + 1) % 12 + 1
    return f'{y}-{mo:02d}-{x // 20 % 28 + 1:02d}T{x // 560 % 10 + 8:02d}:{x // 5600 % 60:02d}:{x // 336000 % 60:02d}.000Z'

def build(src):
    """Files and relationship records of the in-product entries, and the symbols.yaml links."""
    sym = yaml.safe_load(open(os.path.join(src, 'symbols.yaml')))['symbols']
    existing_subjects = set()
    for f in os.listdir(os.path.join(src, 'facts')):
        m = re.search(r'^subject_key: (.+)$', open(os.path.join(src, 'facts', f)).read(), re.M)
        if m: existing_subjects.add(m.group(1).strip().strip("'\""))
    files, rels, links, used, props, number, new_subjects = {}, [], {}, set(), set(), 400, {}
    for t, st, s in select(sym):
        rid = entry_id(t, st, used); at = stamp(rid); mod = module_of(t['file'])
        number += 1 + h(rid) % 4
        fn = next((a for a in reversed(t['anc']) if IDENT.match(a)), None) or (s['title'] if s else None) or t['anc'][0]
        subject = f'{mod.replace("-", "_")}.{snake(fn) if IDENT.match(fn) else slug(fn).replace("-", "_")}'
        prop = '_'.join(slug(t['title']).split('-')[:8]).replace('-', '_'); base_prop, n = prop, 2
        while (subject, prop) in props: prop, n = f'{base_prop}_{n}', n + 1
        props.add((subject, prop))
        ref = f'{SOURCE}: SRV-{number}'
        ck = claim_key(st)
        inv = [{'claim_key': ck, 'claim_text': st, 'role': ROLES.get(st, 'descriptive'), 'status': 'modeled', 'span': {'start': 0, 'end': len(st)}, 'subjects': [subject]}]
        statement = st + '.'
        title = statement if len(statement) <= 160 else statement[:157].rstrip() + '…'
        front = {'title': title, 'status': 'active', 'semantic_text': statement, 'semantic_clauses': [st], 'logic_claims': [ck],
                 'semantic_inventory_version': 'kibi.semantic-inventory.v1', 'semantic_source_field': 'semantic_text',
                 'semantic_source_hash': hashlib.sha256(statement.encode()).hexdigest(), 'semantic_inventory': inv, 'firmness': 'firm', 'required_evidence': 'asserted',
                 'origin': {'kind': 'import', 'ref': ref, 'recorded_at': at}, 'tags': ['bootstrap', TAG, f'component:{mod}'], 'id': rid, 'type': 'req'}
        where = ' > '.join(t['anc'])
        body = [statement, '', '## Context', '', f'Reason not stated. The server test suite checks this behaviour in apps/papra-server/{t["file"]} ({where}).', '',
                '## Source', '', f'Source: {SOURCE} - SRV-{number}', '']
        files[f'requirements/{rid}.md'] = dump(front, '\n'.join(body))
        fid = f'FACT-papra-{slug(subject)}-{slug(prop)}'
        f = {'title': f'{subject} {prop} = True', 'status': 'active', 'fact_kind': 'property_value', 'subject_key': subject, 'property_key': prop, 'operator': 'eq',
             'value_type': 'bool', 'value_bool': True, 'claim_key': ck, 'claim_text': st, 'text_ref': rid, 'tags': ['lane:strict', TAG],
             'origin': {'kind': 'agent', 'ref': ref, 'recorded_at': at}, 'id': fid, 'type': 'fact'}
        files[f'facts/{fid}.md'] = dump(f, f'{st}.\n\nModeled from {rid} so the claim can be checked for contradictions.\n')
        rels += [('requires_property', rid, fid, at)]
        sid = f'FACT-papra-subject-{slug(subject)}'
        if subject not in existing_subjects:
            existing_subjects.add(subject); new_subjects[subject] = (sid, fn, mod, t['file'])
        if subject in new_subjects or os.path.exists(os.path.join(src, 'facts', f'{sid}.md')):
            rels.append(('constrains', rid, sid, at))
        else:  # a real subject whose fact has another id
            real = next(x for x in os.listdir(os.path.join(src, 'facts')) if re.search(rf'^subject_key: {re.escape(subject)}$', open(os.path.join(src, 'facts', x)).read(), re.M) and 'fact_kind: subject' in open(os.path.join(src, 'facts', x)).read())
            rels.append(('constrains', rid, real[:-3], at))
        if s is not None: links.setdefault(s['id'], []).append(rid)
    def kw(subject): return {w.rstrip('s') for w in subject.split('.', 1)[-1].split('_') if w}
    for subject, (sid, fn, mod, test) in sorted(new_subjects.items()):
        near = sorted(o for o in existing_subjects if o != subject and (len(kw(o) & kw(subject)) / len(kw(o) | kw(subject)) >= 0.75 or (min(len(kw(o)), len(kw(subject))) >= 3 and (kw(o) < kw(subject) or kw(subject) < kw(o)))))
        code = 'apps/papra-server/' + test.replace('.test.ts', '.ts')
        text = (f'Definition not stated: {fn} is the code under test in {code}, named by the describe() block of its tests.' if IDENT.match(fn) else
                f'Definition not stated: named after the test suite "{fn}" in apps/papra-server/{test}, which checks this behaviour.')
        if near: text += ' It is not ' + ' or '.join(near) + ', which is another subject with a similar name.'
        files[f'facts/{sid}.md'] = dump({'title': f'{fn} ({mod})', 'status': 'active', 'fact_kind': 'subject', 'subject_key': subject, 'canonical_key': subject,
                                        **({'distinct_from': near} if near else {}), 'tags': ['lane:strict', TAG],
                                        'origin': {'kind': 'agent', 'ref': SOURCE, 'recorded_at': stamp(sid)}, 'id': sid, 'type': 'fact'}, text + '\n')
    return files, rels, links

def half_crowd():
    """crowd.py's entries whose subject hashes even, all entries of a subject together."""
    keep = [(tp, e) for tp, e in crowd.ENTRIES if h('half|' + e.subject) % 2 == 0]
    crowd.ENTRIES[:] = keep
    return crowd.build()

def append_rels(out, rels):
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

def write(src, out, with_crowd=True):
    files, rels, links = build(src)
    cfiles, crels = half_crowd() if with_crowd else ({}, [])
    if os.path.exists(out): shutil.rmtree(out)
    shutil.copytree(src, out)
    for path, text in sorted({**cfiles, **files}.items()):
        full = os.path.join(out, path)
        if os.path.exists(full): raise SystemExit(f'{path} exists in the source knowledge base')
        open(full, 'w').write(text)
    append_rels(out, crels + rels)
    # symbols.yaml: the header comment as it was, the links appended to each symbol's relationships
    path = os.path.join(out, 'symbols.yaml'); text = open(path).read()
    header = text[:text.index('symbols:')]
    doc = yaml.safe_load(text)
    for s in doc['symbols']:
        for rid in links.get(s['id'], []): s.setdefault('relationships', []).append({'type': 'implements', 'target': rid})
    open(path, 'w').write(header + yaml.dump(doc, Dumper=crowd._Dumper, sort_keys=False, allow_unicode=True, width=100000))
    reqs = sum(1 for p in files if p.startswith('requirements/')); creqs = sum(1 for p in cfiles if p.startswith('requirements/'))
    print(f'{reqs} in-product requirements ({sum(map(len, links.values()))} linked to {len(links)} symbols), {creqs} crowd requirements -> {out}')

if __name__ == '__main__':
    args = sys.argv[1:]
    src = os.path.join(HERE, '..', 'e7acb46f9bc6-hide-why', '.kb')
    if args and args[0] == '--roles':
        import subprocess
        from concurrent.futures import ThreadPoolExecutor
        def role(st):
            p = subprocess.run(['kibi', 'model', '--input', '-'], input=json.dumps({'mode': 'analyze', 'text': st + '.', 'clauses': [st]}), cwd=args[1], capture_output=True, text=True, timeout=600)
            props = json.loads(p.stdout.strip().splitlines()[0])['data']['receipt']['propositions']
            if [x['claim_text'] for x in props] != [st]: raise SystemExit(f'the advisor splits {st!r} differently: {[x["claim_text"] for x in props]}')
            if props[0]['claim_key'] != claim_key(st): raise SystemExit(f'claim key of {st!r}: {props[0]["claim_key"]}')
            return st, props[0]['role']
        with ThreadPoolExecutor(4) as pool: found = list(pool.map(role, [st for _, st in candidates(skip_rationale=False)]))
        out = {t: r for t, r in sorted(found) if r != 'descriptive'}
        json.dump(out, open(ROLES_FILE, 'w'), indent=1, sort_keys=True); open(ROLES_FILE, 'a').write('\n')
        print(f'{len(found)} clauses, {len(out)} not descriptive -> {ROLES_FILE}')
    elif args and args[0] == '--list':
        sym = yaml.safe_load(open(os.path.join(src, 'symbols.yaml')))['symbols']
        for t, st, s in select(sym): print(f"{module_of(t['file'])}\t{s['title'] if s else '-'}\t{st}")
    elif len(args) == 3 and args[0] == '--true-only': write(args[1], args[2], with_crowd=False)
    elif len(args) == 2: write(*args)
    else: raise SystemExit(__doc__)
