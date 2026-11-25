"""Exports finished batch directories for analysis outside the harness: flat CSV tables (one row per arc run,
per step, per tool call, per judge answer, per permission prompt and per scripted-user reply), a manifest of
the setup, and each batch's full run directories as a compressed archive (transcripts, prompts, diffs, test
reports, judge input and output, Kibi logs and checks).

Usage: python3 export-batch.py <outDir> <label=runsDir> [<label=runsDir> ...] [--project papra] [--no-raw]
"""
import csv, glob, json, os, subprocess, sys

args = [a for a in sys.argv[1:]]
project = "papra"
raw = True
if "--project" in args:
    i = args.index("--project"); project = args[i + 1]; del args[i:i + 2]
if "--no-raw" in args:
    args.remove("--no-raw"); raw = False
out, batches = args[0], [a.split("=", 1) for a in args[1:]]
os.makedirs(f"{out}/tables", exist_ok=True)
os.makedirs(f"{out}/raw", exist_ok=True)



def strict_probe_pass(s):
    """Mirrors strictProbePass in harness/src/report-arcs.ts: accepted, named the governing decision and did not treat a
    replaced entry as current; a C whose hidden decision test passed needs no naming. Records without the naming answer
    fall back to the plain pass."""
    g = s.get("grade") or {}
    if not g.get("pass"):
        return False
    ans = {a.get("question"): a.get("answer") for a in (g.get("judge") or {}).get("answers") or []}
    if ans.get("treated_superseded_as_current") == "yes":
        return False
    if ans.get("named_governing_decision") in (None, "yes"):
        return True
    t = g.get("rule_tests") or {}
    return g.get("outcome") == "C" and bool(t) and bool(t.get("passed")) and not t.get("failed_count")

def read_json(path, default=None):
    try:
        return json.load(open(path))
    except Exception:
        return default


def jsonl(path):
    if not os.path.exists(path):
        return []
    rows = []
    for line in open(path, errors="replace"):
        try:
            rows.append(json.loads(line))
        except Exception:
            pass
    return rows


tables = {k: [] for k in ("runs", "steps", "tool_calls", "judge_answers", "permissions", "user_replies")}
for label, runs in batches:
    for rj in sorted(glob.glob(f"{runs}/{project}/_arcs/*/*/*/run.json")):
        d = os.path.dirname(rj)
        r = read_json(rj, {})
        spec = r.get("spec", {})
        key = {"batch": label, "arc": spec.get("arc"), "arm": spec.get("arm"), "run_id": r.get("id")}
        steps = r.get("steps", [])
        version = open(f"{d}/kibi-version.txt").read().strip() if os.path.exists(f"{d}/kibi-version.txt") else ""
        tables["runs"].append({
            **key, "family": spec.get("family"), "tier": spec.get("tier"), "model": (spec.get("agent") or {}).get("model"),
            "effort": (spec.get("agent") or {}).get("effort"), "finished": bool(r.get("finished_at")),
            "invalid": r.get("invalid"), "pass": r.get("pass"),
            "probes": sum(1 for s in steps if s.get("kind") == "probe"),
            "probes_passed": sum(1 for s in steps if s.get("kind") == "probe" and (s.get("grade") or {}).get("pass")),
            "probes_strict": sum(1 for s in steps if s.get("kind") == "probe" and strict_probe_pass(s)),
            "controls": sum(1 for s in steps if s.get("kind") == "control"),
            "controls_passed": sum(1 for s in steps if s.get("kind") == "control" and (s.get("grade") or {}).get("pass")),
            "agent_cost_usd": r.get("agent_cost_usd"), "judge_cost_usd": r.get("judge_cost_usd"),
            "user_sim_cost_usd": r.get("user_sim_cost_usd"), "cost_usd": r.get("cost_usd"),
            "agent_wall_seconds": sum((s.get("usage") or {}).get("wall_seconds") or 0 for s in steps),
            "started_at": r.get("started_at"), "finished_at": r.get("finished_at"), "kibi_version": version,
            "audit_ok": (r.get("audit") or {}).get("ok"), "dir": os.path.relpath(d, runs),
        })
        for s in steps:
            u = s.get("usage") or {}
            g = s.get("grade") or {}
            sk = {**key, "step": s.get("id"), "kind": s.get("kind")}
            answers = (g.get("judge") or {}).get("answers") or []
            tables["steps"].append({
                **sk, "outcome": g.get("outcome"), "pass": g.get("pass"), "invalid": g.get("invalid"),
                "strict_pass": strict_probe_pass(s) if s.get("kind") == "probe" else None,
                "terminal_reason": s.get("terminal_reason"), "turns": u.get("turns"), "tool_calls": u.get("tool_calls"),
                "wall_seconds": u.get("wall_seconds"), "cost_usd": u.get("cost_usd"),
                "input_tokens": u.get("input_tokens"), "output_tokens": u.get("output_tokens"),
                "cache_read_tokens": u.get("cache_read_input_tokens"),
                "cache_write_5m_tokens": u.get("cache_creation_5m_input_tokens"),
                "cache_write_1h_tokens": u.get("cache_creation_1h_input_tokens"),
                "user_replies": len(s.get("user_turns") or []),
                "user_reply_cost_usd": sum(t.get("cost_usd") or 0 for t in s.get("user_turns") or []),
                "permission_prompts": len(s.get("user_permissions") or []),
                "permission_denied": sum(1 for p in s.get("user_permissions") or [] if p.get("decision") != "allow"),
                "first_lookup_turn": s.get("first_lookup_turn"), "first_edit_turn": s.get("first_edit_turn"),
                "surfaced_turn": (s.get("surfaced") or {}).get("turn"), "surfaced_via": (s.get("surfaced") or {}).get("via"),
                "surfaced_cost_usd": (s.get("surfaced") or {}).get("cost_usd"),
                "surfaced_source": (s.get("surfaced") or {}).get("source"),
                # Shown no later than the turn of the first edit (an edit hook fires before its edit runs); a step with no edit counts when shown at all.
                "surfaced_before_edit": (None if s.get("surfaced") is None and "surfaced" not in s else
                                         bool(s.get("surfaced")) and (s.get("first_edit_turn") is None or s["surfaced"]["turn"] <= s["first_edit_turn"])),
                "record_written": s.get("record_written"), "rule_record_changed": g.get("rule_record_changed"),
                "governing_changed": g.get("governing_changed"),
                "files_changed": len(g.get("files_changed") or []), "source_files_changed": len(g.get("source_files_changed") or []),
                "commit_gate_blocked": (s.get("commit_gate") or {}).get("blocked"),
                **{f"judge_{a.get('question')}": a.get("answer") for a in answers},
            })
            for a in answers:
                tables["judge_answers"].append({**sk, "question": a.get("question"), "answer": a.get("answer"), "evidence": a.get("evidence")})
            for p in s.get("user_permissions") or []:
                tables["permissions"].append({**sk, "tool": p.get("tool"), "decision": p.get("decision"), "reason": (p.get("reason") or "")[:2000], "why": p.get("why"), "cost_usd": p.get("cost_usd")})
            for i, t in enumerate(s.get("user_turns") or []):
                tables["user_replies"].append({**sk, "n": i + 1, "agent_said": t.get("agent_said"), "reply": t.get("reply"), "why": t.get("why"), "cost_usd": t.get("cost_usd")})
            for tr in sorted(glob.glob(f"{d}/steps/{s.get('id')}/transcript*.jsonl")):
                session = os.path.basename(tr).removesuffix(".jsonl")
                uses, results = {}, {}
                for e in jsonl(tr):
                    content = (e.get("message") or {}).get("content")
                    if not isinstance(content, list):
                        continue
                    for c in content:
                        if c.get("type") == "tool_use":
                            uses[c.get("id")] = c
                        elif c.get("type") == "tool_result":
                            results[c.get("tool_use_id")] = c
                for n, (tid, c) in enumerate(uses.items()):
                    res = results.get(tid) or {}
                    inp = c.get("input") or {}
                    tables["tool_calls"].append({
                        **sk, "session": session, "n": n + 1, "tool": c.get("name"),
                        "command": (inp.get("command") or "")[:500] if isinstance(inp, dict) else "",
                        "input_chars": len(json.dumps(inp)), "result_chars": len(json.dumps(res.get("content"))),
                        "is_error": bool(res.get("is_error")),
                    })
    if raw:
        dest = f"{out}/raw/{label}.tar.xz"
        if not os.path.exists(dest):
            parent, name = os.path.dirname(os.path.abspath(runs)), os.path.basename(os.path.abspath(runs))
            tmp = f"{runs}.tar.xz.part"
            subprocess.run(f"tar -C '{parent}' -cf - '{name}' | xz -T0 -6 > '{tmp}'", shell=True, check=True)
            subprocess.run(["cp", tmp, dest + ".part"], check=True)
            os.replace(dest + ".part", dest)
            os.remove(tmp)

for name, rows in tables.items():
    cols = []
    for row in rows:
        for k in row:
            if k not in cols:
                cols.append(k)
    with open(f"{out}/tables/{name}.csv", "w", newline="") as f:
        w = csv.DictWriter(f, fieldnames=cols)
        w.writeheader()
        w.writerows(rows)
    print(f"{name}: {len(rows)} rows")
