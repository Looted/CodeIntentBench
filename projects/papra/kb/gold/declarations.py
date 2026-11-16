"""Record every declaration of a linked source file in .kb/symbols.yaml, the way Kibi's own knowledge base does.
Usage: python3 declarations.py <ws> [--dry]

A file the knowledge base links (a symbol entry names it as sourceFile) is gated by `kibi check --staged`: once
such a file is staged with a behaviour change, every declaration Kibi's extractor finds in it must have its own
symbol entry with authored evidence. The bootstrap recorded only the functions that decide a claim, so any
edit to a linked file was refused over its sibling declarations. Kibi's own repository links nearly all of its
declarations (implements + covered_by, with a symbol_role), so a healthy project passes the gate.

This script finds the uncovered declarations the way the gate does: it appends a throwaway export to each
linked file, stages them, runs `kibi check --staged`, reads the "Not in .kb/symbols.yaml" details and restores
the files. Each uncovered declaration then gets an entry:
  symbol_role   type-shape (type, interface), structural (tables, schemas), config (constants, configs),
                otherwise behavioral;
  implements    one requirement that symbols in the same directory implement: the one whose title shares
                the most words with the declaration's name, then the one most of the file's symbols
                implement, skipping requirements that already have Kibi's broad-fanout threshold of
                implementing symbols (when all of them have, the requirements of the same module);
  covered_by    the tests in the same directory that name the declaration, else the file's existing
                test links.
Source files (outside .kb) must have no uncommitted changes. Run `kibi sync --refresh-symbol-coordinates` afterwards."""
import collections, json, os, re, subprocess, sys, yaml

WS = os.path.abspath(sys.argv[1]); DRY = '--dry' in sys.argv
KB = os.path.join(WS, '.kb'); P = os.path.join(KB, 'symbols.yaml')
MARK = 'cibDeclarationProbeMarker'

def git(*a, **k): return subprocess.run(['git', *a], cwd=WS, check=True, capture_output=True, text=True, **k).stdout

if git('status', '--porcelain', '--untracked-files=no', '--', '.', ':!.kb').strip(): raise SystemExit('source files have uncommitted changes')
raw = open(P).read(); header = raw[:raw.index('symbols:')]
syms = yaml.safe_load(raw)['symbols']
by_file = collections.defaultdict(list)
for s in syms:
    if s.get('sourceFile') and any(r['type'] == 'implements' for r in s.get('relationships') or []): by_file[s['sourceFile']].append(s)
files = sorted(f for f in by_file if os.path.exists(os.path.join(WS, f)))

# 1. what the staged gate reports for a behaviour change in every linked file
for f in files:
    with open(os.path.join(WS, f), 'a') as h: h.write(f'\nexport const {MARK} = 1;\n')
try:
    git('add', '--', *files)
    out = subprocess.run(['kibi', 'check', '--staged'], cwd=WS, capture_output=True, text=True, timeout=900).stdout
finally:
    git('reset', '-q', '--', *files); git('checkout', '--', *files)
missing, cur = collections.defaultdict(list), None
for line in out.splitlines():
    m = re.match(r'\s*Detail: (\S+) — extraction finds', line)
    if m: cur = m.group(1); continue
    m = re.match(r'\s*Detail:\s+Not in \.kb/symbols\.yaml: (.*)', line)
    if m and cur:
        for name, ln in re.findall(r'([A-Za-z_$][\w$]*) \(line (\d+)\)', m.group(1)):
            if name != MARK and name not in missing[cur]: missing[cur].append((name, int(ln)))
        cur = None

COMMON = {'papra', 'organization', 'document', 'error', 'create', 'get', 'the', 'and', 'are', 'for', 'with', 'auto', 'req', 'all', 'new'}
def words(s):
    ws = {re.sub(r'(ies)$', 'y', re.sub(r'(?<!s)s$', '', w.lower())) for w in re.findall(r'[A-Z]?[a-z]+|[A-Z]+(?![a-z])', s) if len(w) > 2}
    return ws - COMMON

def role(path, name, ln):
    lines = open(os.path.join(WS, path)).read().splitlines()
    text = lines[ln - 1] if 0 < ln <= len(lines) else ''
    if re.search(r'\b(type|interface)\s+' + re.escape(name) + r'\b', text): return 'type-shape'
    if re.search(r'\bfunction\s+' + re.escape(name) + r'\b|\b' + re.escape(name) + r'\s*=\s*(async\s*)?(\(|function\b|[A-Za-z_$][\w$]*\s*=>)', text): return 'behavioral'
    if re.search(r'(Table|Schema|Schemas)$', name) or re.search(r'\b(sqliteTable|z\.object|z\.string|z\.enum)\b', text): return 'structural'
    if re.fullmatch(r'[A-Z][A-Z0-9_]+', name) or re.search(r'(Config|Definition|Definitions)$', name): return 'config'
    return 'behavioral'

def module_root(path):
    m = re.match(r'(.*?/modules/[^/]+)/', path); return m.group(1) if m else os.path.dirname(path)

def tests_naming(path, name):
    d = os.path.dirname(path); out = []
    for f in sorted(os.listdir(os.path.join(WS, d))):
        if re.search(r'\.test\.[cm]?[jt]sx?$', f) and re.search(r'\b' + re.escape(name) + r'\b', open(os.path.join(WS, d, f)).read()): out.append(f'{d}/{f}')
    return out

def test_id(file):
    s = re.sub(r'\.test\.[cm]?[jt]sx?$', '', re.sub(r'^(apps|packages)/', '', file))
    return 'TEST-' + re.sub(r'[^A-Za-z0-9]+', '-', s)

have_tests = {f[:-3] for f in os.listdir(os.path.join(KB, 'tests'))}
req_text = {}
for f in os.listdir(os.path.join(KB, 'requirements')):
    m = yaml.safe_load(open(os.path.join(KB, 'requirements', f)).read().split('---', 2)[1])
    req_text[m['id']] = (m.get('title') or '') + ' ' + m['id']
ids = {s['id'] for s in syms}; added = []
FANOUT = 8  # Kibi's broad_requirement_review threshold: more implementing symbols than this asks for a split
load = collections.Counter(r['target'] for s in syms for r in s.get('relationships') or [] if r['type'] == 'implements')
for path, decls in sorted(missing.items()):
    peers = by_file[path]
    reqs = collections.Counter(r['target'] for s in peers for r in s['relationships'] if r['type'] == 'implements')
    near = {r['target'] for f, ss in by_file.items() if os.path.dirname(f) == os.path.dirname(path) for s in ss for r in s['relationships'] if r['type'] == 'implements'}
    peer_tests = sorted({r['target'] for s in peers for r in s['relationships'] if r['type'] == 'covered_by'})
    stem = re.sub(r'\.(ts|tsx)$', '', path.split('/')[-1])
    for name, ln in decls:
        w = words(name)
        score = lambda r: len(w & words(req_text.get(r, r)))
        order = sorted(near, key=lambda r: (-score(r), -reqs[r], r))
        if all(load[r] >= FANOUT for r in order):
            # every requirement of the directory is full: widen to the requirements of the same module
            mod = module_root(path)
            wide = {r['target'] for f, ss in by_file.items() if module_root(f) == mod for s in ss for r in s['relationships'] if r['type'] == 'implements'}
            order = sorted(wide, key=lambda r: (-score(r), -reqs[r], r)) or order
        pick = [next((r for r in order if load[r] < FANOUT), order[0])]
        load[pick[0]] += 1
        tests = [t for t in dict.fromkeys(test_id(x) for x in tests_naming(path, name)) if t in have_tests] or peer_tests
        sid = f'SYM-papra-{stem}-{name}'
        if sid in ids: sid = f'{sid}-{ln}'
        ids.add(sid)
        added.append({'id': sid, 'title': name, 'sourceFile': path, 'status': 'active', 'symbol_role': role(path, name, ln),
                      'relationships': [{'type': 'implements', 'target': r} for r in pick] + [{'type': 'covered_by', 'target': t} for t in tests]})
print('over fanout', {r: n for r, n in load.items() if n > FANOUT})
print(f'{len(files)} linked files, {sum(map(len, missing.values()))} uncovered declarations in {len(missing)} files; roles',
      dict(collections.Counter(a['symbol_role'] for a in added)), '; without tests', sum(1 for a in added if len(a['relationships']) == len([r for r in a['relationships'] if r['type'] == 'implements'])))
if DRY:
    for a in added: print(' ', a['symbol_role'], a['sourceFile'].split('/')[-1], a['title'], [r['target'][-8:] for r in a['relationships']])
    sys.exit(0)
class D(yaml.SafeDumper):
    def increase_indent(self, flow=False, indentless=False): return super().increase_indent(flow, False)
open(P, 'w').write(header + yaml.dump({'symbols': syms + added}, Dumper=D, sort_keys=False, allow_unicode=True, width=10000))
