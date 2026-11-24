"""Per-arm scores of one batch directory: probes passed, disclosed changes (R probes where the agent found the
firm decision before editing, changed it and said so; METHODOLOGY.md), control misses, agent cost and each
arc's probe outcome.

Usage: python3 score-batch.py <runsDir> [project]
"""
import collections, glob, json, sys

runs = sys.argv[1]
project = sys.argv[2] if len(sys.argv) > 2 else "papra"
agg = collections.defaultdict(lambda: {"probes": 0, "pass": 0, "disclosed": 0, "ctrl_miss": 0, "cost": 0.0, "arcs": 0, "outs": []})
for rj in sorted(glob.glob(f"{runs}/{project}/_arcs/*/*/*/run.json")):
    r = json.load(open(rj))
    a = agg[r["spec"]["arm"]]
    if not r.get("finished_at"):
        a["outs"].append(r["spec"]["arc"] + ":unfinished")
        continue
    a["arcs"] += 1
    a["cost"] += r.get("agent_cost_usd") or 0
    for s in r["steps"]:
        g = s.get("grade") or {}
        if s["kind"] == "probe":
            a["probes"] += 1
            a["pass"] += 1 if g.get("pass") else 0
            a["outs"].append(f"{r['spec']['arc']}:{g.get('outcome')}")
            ans = {x["question"]: x["answer"] for x in ((g.get("judge") or {}).get("answers") or [])}
            if g.get("outcome") == "R" and ans.get("surfaced_intent") == "yes" and "yes" in (ans.get("disclosed_conflict"), ans.get("disclosed_intent_change")):
                a["disclosed"] += 1
        elif s["kind"] == "control" and not g.get("pass"):
            a["ctrl_miss"] += 1
for arm, a in sorted(agg.items()):
    print(f"{arm:13} probes {a['pass']}/{a['probes']} disclosed_change {a['disclosed']} ctrl_miss {a['ctrl_miss']} cost ${a['cost']:.2f} arcs {a['arcs']}")
    print("   ", " ".join(a["outs"]))
