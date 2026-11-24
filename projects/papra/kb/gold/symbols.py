"""Re-read ../symbols-map.json at the commit a workspace is checked out at and rewrite .kb/symbols.yaml from it.
Usage: python3 symbols.py <ws> [--dry | --prune-tests]

The same steps the bootstrap took for the first two bases (harness/src/arm-tools/kibi-bootstrap.ts), so a later
base links the code it has: a map entry names the functions that decide one claim, with every path a function
has had; only the ones declared in this checkout are written. A closed (superseded) requirement gets no
`implements` link: its successor's entry names the code. Existing test files in the same directory that name a
symbol become its `covered_by` evidence and the requirement's `verified_by`; TEST entities whose file is gone
are deleted by a second call with --prune-tests, once the new manifest is synced. symfix.py then merges a
function listed for several requirements into one symbol."""
import json, os, re, subprocess, sys, yaml
WS = os.path.abspath(sys.argv[1]); DRY = '--dry' in sys.argv
HERE = os.path.dirname(os.path.abspath(__file__)); KB = os.path.join(WS, '.kb')
MAP = json.load(open(os.path.join(HERE, '..', 'symbols-map.json')))
LATER = json.load(open(os.path.join(HERE, 'later.json')))
SOURCES = {s['id']: s['title'] for s in json.load(open(os.path.join(HERE, '..', 'claims.json')))['knowledgeSources'] + LATER['knowledgeSources']}

def kibi(cmd, payload):
    p = subprocess.run(['kibi', cmd, '--input', '-'], input=json.dumps(payload), cwd=WS, capture_output=True, text=True, timeout=600)
    out = p.stdout.strip().splitlines()
    d = json.loads(out[0]) if out else {'status': 'error', 'error': p.stderr[-800:]}
    if d.get('status') != 'success': raise SystemExit(f'FAILED {cmd} {payload.get("id")}: {json.dumps(d.get("error"))[:1500]}')
    return d

def front(path): return yaml.safe_load(open(path).read().split('---', 2)[1])

reqs = {}
for f in os.listdir(f'{KB}/requirements'):
    m = front(f'{KB}/requirements/{f}'); reqs[(m.get('origin') or {}).get('ref')] = m

def declared(path, name):
    file = os.path.join(WS, path)
    return os.path.exists(file) and re.search(r'^export (const|let|async function|function|class) ' + re.escape(name) + r'\b', open(file).read(), re.M)

def tests_for(path, name):
    d = os.path.dirname(path); out = []
    for f in sorted(os.listdir(os.path.join(WS, d))):
        if re.search(r'\.test\.[cm]?[jt]sx?$', f) and re.search(r'\b' + re.escape(name) + r'\b', open(os.path.join(WS, d, f)).read()): out.append(f'{d}/{f}')
    return out

def test_id(file):
    s = re.sub(r'\.test\.[cm]?[jt]sx?$', '', re.sub(r'^(apps|packages)/', '', file))
    return 'TEST-' + re.sub(r'[^A-Za-z0-9]+', '-', s)

def prune_tests():
    """TEST entities whose file no longer exists: unlink them, then delete them. Run after the new manifest is synced."""
    have = {f[:-3]: front(f'{KB}/tests/{f}') for f in os.listdir(f'{KB}/tests')}
    gone = sorted(t for t, m in have.items() if not os.path.exists(os.path.join(WS, m.get('sourceFile') or m.get('text_ref') or '')))
    if not gone: return
    rels = []
    for f in os.listdir(f'{KB}/relationships'):
        for r in (yaml.safe_load(open(f'{KB}/relationships/{f}')) or {}).get('relationships', []) or []:
            if r['to'] in gone or r['from'] in gone: rels.append({'type': r['type'], 'from': r['from'], 'to': r['to']})
    if rels: kibi('delete', {'relationships': rels})
    d = kibi('delete', {'ids': gone})
    if 'deletionPlan' in d['data']: d = kibi('delete', {'ids': gone, 'approvedPlanHash': d['data']['deletionPlan']['planHash']})
    left = [t for t in gone if os.path.exists(f'{KB}/tests/{t}.md')]
    if left: raise SystemExit(f'could not delete {left}: {json.dumps(d["data"])[:800]}')
    print('deleted tests whose file is gone:', gone)

if '--prune-tests' in sys.argv: prune_tests(); sys.exit(0)

symbols, req_tests, skipped, unmapped, used_tests = [], {}, [], [], {}
for entry in MAP:
    m = reqs.get(f"{SOURCES[entry['sourceId']]}: {entry['reference']}")
    if not m: unmapped.append(entry['reference']); continue
    if m['status'] == 'closed': continue
    rid, n = m['id'], 0
    for sym in entry.get('symbols', []):
        if not declared(sym['path'], sym['symbol']): skipped.append((rid, sym['symbol'], sym['path'])); continue
        n += 1
        tests = tests_for(sym['path'], sym['symbol'])
        for t in tests: used_tests[t] = sym['symbol']; req_tests.setdefault(rid, set()).add(test_id(t))
        symbols.append({'id': f"SYM-{rid[4:]}-{n}", 'title': sym['symbol'], 'sourceFile': sym['path'], 'status': 'active', 'symbol_role': 'behavioral',
                        'relationships': [{'type': 'implements', 'target': rid}] + [{'type': 'covered_by', 'target': test_id(t)} for t in tests]})
    if n == 0: print('no declared symbol for', rid)
print(f'{len(symbols)} symbols for {len({s["relationships"][0]["target"] for s in symbols})} requirements; {len(skipped)} map symbols not declared in this checkout; {len(used_tests)} test files')
if DRY:
    for s in skipped: print('  skipped', *s)
    sys.exit(0)

have = {f[:-3]: front(f'{KB}/tests/{f}') for f in os.listdir(f'{KB}/tests')}
for file, symbol in sorted(used_tests.items()):
    tid = test_id(file)
    if tid in have: continue
    kibi('upsert', {'type': 'test', 'id': tid, 'properties': {'title': os.path.basename(file), 'status': 'active', 'sourceFile': file, 'text_ref': file},
                    'document': {'body': f"Existing unit test file {file} from the project's own suite.\n\n## Context\n\nLinked at onboarding as the test evidence for the symbols it names ({symbol} and others in the same module); it exercises the module, not necessarily every clause of the requirements those symbols implement."}})
    print('test', tid)
for rid, tests in sorted(req_tests.items()):
    m = next(x for x in reqs.values() if x['id'] == rid)
    kibi('upsert', {'type': 'req', 'id': rid, 'properties': {'title': m['title'], 'status': m['status']}, 'relationships': [{'type': 'verified_by', 'from': rid, 'to': t} for t in sorted(tests)]})

p = f'{KB}/symbols.yaml'; raw = open(p).read(); header = raw[:raw.index('symbols:')]
class D(yaml.SafeDumper):
    def increase_indent(self, flow=False, indentless=False): return super().increase_indent(flow, False)
open(p, 'w').write(header + yaml.dump({'symbols': symbols}, Dumper=D, sort_keys=False, allow_unicode=True, width=10000))
subprocess.run([sys.executable, os.path.join(HERE, 'symfix.py'), WS], check=True)
