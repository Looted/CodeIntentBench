import yaml,sys,collections,re
ws=sys.argv[1]; p=ws+'/.kb/symbols.yaml'
raw=open(p).read(); header=raw[:raw.index('symbols:')]
syms=yaml.safe_load(raw)['symbols']
# ownership: (title, req-suffix) implements links to drop
DROP={('createDocument',x) for x in ['4715C9F2','66925D7B','409E8212','73A751A1','63EA565E','F0111402','F5E2FEA1']} | {('createDocumentsRepository','7DDB2737')}
for s in syms:
  s['relationships']=[r for r in s['relationships'] if not (r['type']=='implements' and (s['title'], r['target'][-8:]) in DROP)]
syms=[s for s in syms if any(r['type']=='implements' for r in s['relationships'])]
g=collections.OrderedDict()
for s in syms: g.setdefault((s['title'],s['sourceFile']),[]).append(s)
out=[]
for (title,src),v in g.items():
  if len(v)==1: out.append(v[0]); continue
  stem=re.sub(r'\.(ts|tsx)$','',src.split('/')[-1])
  m={'id':f'SYM-papra-{stem}-{title}','title':title,'sourceFile':src,'status':'active','symbol_role':v[0].get('symbol_role','behavioral'),'relationships':[]}
  for s in v:
    for k in s:
      if k not in m and k!='relationships': m[k]=s[k]
    for r in s['relationships']:
      if r not in m['relationships']: m['relationships'].append(r)
  m['relationships'].sort(key=lambda r:(r['type']!='implements',r['type'],r['target']))
  print('merged',m['id'],[r['target'][-8:] for r in m['relationships'] if r['type']=='implements'], 'from', [s['id'] for s in v])
  out.append(m)
c=collections.Counter(len([r for r in s['relationships'] if r['type']=='implements']) for s in out); print('implements per symbol',c, len(out))
class D(yaml.SafeDumper):
  def increase_indent(self, flow=False, indentless=False): return super().increase_indent(flow, False)
open(p,'w').write(header+yaml.dump({'symbols':out},Dumper=D,sort_keys=False,allow_unicode=True,width=10000))
