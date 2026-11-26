#!/usr/bin/env bash
# Runs every arc x arm pair once, N at a time, and skips pairs that already have a finished run.
# Usage: run-batch.sh <project> <N> [arms] [arcs]
# Environment: FENCEBENCH_RUNS_DIR (default runs/batch-<RUNS_TAG>-<project>), RUNS_TAG (default default),
#   MODEL (default claude-sonnet-5-5), FENCEBENCH_WORK_ROOT (default /tmp/cw; Kibi's first sync crashes on long
#   workspace paths), KIBI_SOURCE_PACKS / KIBI_SOURCE_PLUGIN (Kibi built from source, see arms/kibi/setup).
# Repeat attempts are separate RUNS_TAGs, so each tag holds one attempt per pair.
set -uo pipefail
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
harness="$(cd "$here/.." && pwd)"
project="$1"; n="$2"
arms="${3:-none,docs,tracker,memory,agents-md,kibi,kibi-conv}"
cd "$harness"
arcs="${4:-$(ls ../projects/$project/arcs | tr '\n' ',' | sed 's/,$//')}"
export FENCEBENCH_RUNS_DIR="${FENCEBENCH_RUNS_DIR:-$(cd .. && pwd)/runs/batch-${RUNS_TAG:-default}-$project}"
mkdir -p "$FENCEBENCH_RUNS_DIR/logs"
export FENCEBENCH_WORK_ROOT="${FENCEBENCH_WORK_ROOT:-/tmp/cw}"
TOOLS='Bash(cd:*),Bash(pnpm:*),Bash(npx:*),Bash(git diff:*),Bash(git status:*),Bash(git log:*),Bash(git show:*),Bash(ls:*),Bash(cat:*),Bash(grep:*),Bash(rg:*),Bash(find:*),Bash(head:*),Bash(tail:*),Bash(wc:*),Bash(sed -n:*),Bash(jq:*),Bash(git checkout --:*),Bash(git restore:*)'
[ "$project" = kibi ] && TOOLS="$TOOLS,Bash(bun:*)"
export TOOLS project MODEL
for arc in ${arcs//,/ }; do for arm in ${arms//,/ }; do echo "$arc $arm"; done; done | xargs -P "$n" -L 1 bash -c '
  arc="$0"; arm="$1"
  if ls "$FENCEBENCH_RUNS_DIR/$project/_arcs/$arc/$arm"/*/run.json >/dev/null 2>&1 && grep -l finished_at "$FENCEBENCH_RUNS_DIR/$project/_arcs/$arc/$arm"/*/run.json >/dev/null 2>&1; then echo "skip $arc $arm"; exit 0; fi
  node src/cli.ts run-arc --project "$project" --arc "$arc" --arm "$arm" --model "${MODEL:-claude-sonnet-5-5}" --effort low --max-turns 60 --timeout 20 --budget 3 --user-replies 5 --permissions accept-edits --allowed-tools "$TOOLS" > "$FENCEBENCH_RUNS_DIR/logs/$arc.$arm.log" 2>&1
  echo "done $arc $arm exit $?"
'
