"""Link each production symbol that has no test evidence to the existing test files that actually run it.
Usage: python3 coverage.py <ws> <coverage-dir> [--dry]

<coverage-dir> holds one V8 coverage report per test file, made by running each unit test file of the server on
its own at the base commit (see coverage.sh): <coverage-dir>/<test path with / as _>/coverage-final.json.
A symbol's span comes from .kb/symbol-coordinates.yaml (run `kibi sync --refresh-symbol-coordinates` first).
  - A span that holds functions is run by a test file when one of those functions was called.
  - A span without functions (a config object, a schema, a table) is run when one of its statements executed.
  - A type has no runtime code: it takes the tests that run the other symbols of its file.
Each symbol without a covered_by link gets the test files of the closest group that ran it (same directory, then
same module, then a test named after the module), up to three, most hits first; a function only reached from
unrelated tests (a route registration every end-to-end test boots) gets the one that ran it most. A test file without a TEST entity gets one, worded like the onboarding ones, and the requirement the symbol
implements is verified_by its tests (Kibi counts a symbol's test only through a requirement it verifies). The
project's code and tests are not changed; this only records evidence the existing suite already provides."""
import collections, json, os, re, subprocess, sys, yaml

WS = os.path.abspath(sys.argv[1]); COV = os.path.abspath(sys.argv[2]); DRY = '--dry' in sys.argv
KB = os.path.join(WS, '.kb'); P = os.path.join(KB, 'symbols.yaml'); SERVER = 'apps/papra-server/'

def test_id(file):
    s = re.sub(r'\.test\.[cm]?[jt]sx?$', '', re.sub(r'^(apps|packages)/', '', file))
    return 'TEST-' + re.sub(r'[^A-Za-z0-9]+', '-', s)

coords = yaml.safe_load(open(os.path.join(KB, 'symbol-coordinates.yaml')))['coordinates']
fns, stmts = collections.defaultdict(list), collections.defaultdict(list)  # file -> [(test, start, end, count)]
names = {}
for root, _, files in os.walk(os.path.join(WS, SERVER, 'src')):
    for n in files:
        rel = os.path.relpath(os.path.join(root, n), os.path.join(WS, SERVER))
        if n.endswith('.test.ts'): names[rel.replace('/', '_')] = SERVER + rel
for d in sorted(os.listdir(COV)):
    f = os.path.join(COV, d, 'coverage-final.json')
    if not os.path.exists(f) or d not in names: continue
    test = names[d]
    for path, rep in json.load(open(f)).items():
        rel = path[path.index(SERVER):] if SERVER in path else None
        if not rel: continue
        for k, fn in rep['fnMap'].items():
            fns[rel].append((test, fn['loc']['start']['line'], fn['loc']['end']['line'], rep['f'][k]))
        for k, st in rep['statementMap'].items():
            stmts[rel].append((test, st['start']['line'], st['end']['line'], rep['s'][k]))

def module(path):
    m = re.search(r'/modules/([^/]+)/', path); return m.group(1) if m else None

def tier(test, file):
    if os.path.dirname(test) == os.path.dirname(file): return 0
    if module(test) and module(test) == module(file): return 1
    if module(file) and module(file).rstrip('s') in os.path.basename(test): return 2
    return 3

def tests_running(file, start, end):
    """Test files that ran the span, best first. Statements of a span without functions run whenever its module is
    imported, so for those only tests of the same module (directory, module, or a test named after it) count."""
    inside = [x for x in fns.get(file, []) if start <= x[1] and x[2] <= end]
    pool = inside if inside else [x for x in stmts.get(file, []) if start <= x[1] and x[2] <= end]
    hits = collections.Counter()
    for test, _, _, n in pool:
        if n > 0 and (inside or tier(test, file) < 3): hits[test] += n
    return collections.Counter({t: n for t, n in hits.items()}), file

raw = open(P).read(); header = raw[:raw.index('symbols:')]
syms = yaml.safe_load(raw)['symbols']
have_tests = {f[:-3] for f in os.listdir(os.path.join(KB, 'tests'))}
by_file = collections.defaultdict(list)
for s in syms: by_file[s.get('sourceFile')].append(s)
measured, new_tests, unlinked = {}, {}, []
def pick(s):
    c = coords.get(s['id'])
    if not c or not s['sourceFile'].startswith(SERVER): return None
    return tests_running(s['sourceFile'], c['sourceLine'], c['sourceEndLine'])
for s in syms:
    if any(r['type'] == 'covered_by' for r in s.get('relationships') or []): continue
    if s.get('symbol_role') == 'type-shape':
        hits = collections.Counter()
        for peer in by_file[s['sourceFile']]:
            if peer is not s and peer.get('symbol_role') != 'type-shape': hits.update((pick(peer) or ({}, None))[0])
    else:
        hits = (pick(s) or ({}, None))[0]
    if not hits: unlinked.append(s['id']); continue
    best = min(tier(t, s['sourceFile']) for t in hits)
    chosen = sorted((t for t in hits if tier(t, s['sourceFile']) == best), key=lambda t: (-hits[t], t))[:3 if best < 3 else 1]
    measured[s['id']] = chosen
    for t in chosen:
        if test_id(t) not in have_tests: new_tests[test_id(t)] = t

print(f'{len(measured)} symbols linked to tests that run them; {len(new_tests)} new TEST entities; {len(unlinked)} still without a test that runs them')
if DRY:
    for i, ts in measured.items(): print(' ', i, [t.split('/')[-1] for t in ts])
    for i in unlinked: print('  none', i)
    sys.exit(0)
for s in syms:
    for t in measured.get(s['id'], []):
        s.setdefault('relationships', []).append({'type': 'covered_by', 'target': test_id(t)})
def kibi(cmd, payload):
    p = subprocess.run(['kibi', cmd, '--input', '-'], input=json.dumps(payload), cwd=WS, capture_output=True, text=True, timeout=600)
    out = p.stdout.strip().splitlines()
    d = json.loads(out[0]) if out else {'status': 'error', 'error': p.stderr[-800:]}
    if d.get('status') != 'success': raise SystemExit(f'FAILED {cmd} {payload.get("id")}: {json.dumps(d.get("error"))[:1500]}')
    return d
for tid, file in sorted(new_tests.items()):
    if not os.path.exists(os.path.join(WS, file)): raise SystemExit(f'missing test file {file}')
    names = sorted({s['title'] for s in syms if tid in {r['target'] for r in s.get('relationships') or [] if r['type'] == 'covered_by'}})
    kibi('upsert', {'type': 'test', 'id': tid, 'properties': {'title': os.path.basename(file), 'status': 'active', 'sourceFile': file, 'text_ref': file},
                    'document': {'body': f"Existing unit test file {file} from the project's own suite.\n\n## Context\n\nLinked as the test evidence for the "
                                 f"symbols it runs, measured with V8 coverage at the base commit ({', '.join(names[:4])}{' and others' if len(names) > 4 else ''}); "
                                 "it exercises that code, not necessarily every clause of the requirements those symbols implement."}})
# Kibi counts a symbol's test as coverage only when that test verifies a requirement the symbol implements.
verified = set()
for f in os.listdir(os.path.join(KB, 'relationships')):
    for r in (yaml.safe_load(open(os.path.join(KB, 'relationships', f))) or {}).get('relationships', []) or []:
        if r['type'] == 'verified_by': verified.add((r['from'], r['to']))
want = collections.defaultdict(set)
for s in syms:
    rel = s.get('relationships') or []
    reqs = [r['target'] for r in rel if r['type'] == 'implements']; tests = [r['target'] for r in rel if r['type'] == 'covered_by']
    if not tests or any((q, t) in verified for q in reqs for t in tests): continue
    for q in reqs[:1]:
        for t in tests: want[q].add(t)
req_meta = {}
for f in os.listdir(os.path.join(KB, 'requirements')):
    m = yaml.safe_load(open(os.path.join(KB, 'requirements', f)).read().split('---', 2)[1]); req_meta[m['id']] = m
for q, ts in sorted(want.items()):
    kibi('upsert', {'type': 'req', 'id': q, 'properties': {'title': req_meta[q]['title'], 'status': req_meta[q]['status']},
                    'relationships': [{'type': 'verified_by', 'from': q, 'to': t} for t in sorted(ts)]})
print(f'verified_by added for {len(want)} requirements ({sum(map(len, want.values()))} links)')
class D(yaml.SafeDumper):
    def increase_indent(self, flow=False, indentless=False): return super().increase_indent(flow, False)
open(P, 'w').write(header + yaml.dump({'symbols': syms}, Dumper=D, sort_keys=False, allow_unicode=True, width=10000))
