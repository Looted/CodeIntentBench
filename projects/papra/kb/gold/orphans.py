import os,yaml,sys,json,subprocess
ws=sys.argv[1]; kb=ws+'/.kb'; ref=set()
for f in os.listdir(kb+'/relationships'):
  for r in (yaml.safe_load(open(f'{kb}/relationships/{f}')) or {}).get('relationships') or []: ref.add(r['from']); ref.add(r['to'])
for s in yaml.safe_load(open(kb+'/symbols.yaml'))['symbols']:
  for r in s.get('relationships') or []: ref.add(r['target'])
import glob
for rf in glob.glob(kb+'/requirements/*.md'):
  m=yaml.safe_load(open(rf).read().split('---')[1])
  for c in m.get('semantic_inventory') or []:
    for sk in c.get('subjects') or []: ref.add('FACT-papra-subject-'+__import__('re').sub(r'[^a-z0-9]+','-',sk.lower()).strip('-'))
orph=[f[:-3] for f in os.listdir(kb+'/facts') if f[:-3] not in ref and not f.startswith(('FACT-BOOTSTRAP','FACT-GEN'))]
print(len(orph),orph)
if orph and '--delete' in sys.argv:
  run=lambda p: json.loads(subprocess.run(['kibi','delete','--input','-'],input=json.dumps(p),cwd=ws,capture_output=True,text=True).stdout.splitlines()[0])
  d=run({'ids':orph}); h=d['data']['deletionPlan']['planHash']
  d=run({'ids':orph,'approvedPlanHash':h}); print(d['status'], json.dumps(d.get('data'))[:500], d.get('error'))
