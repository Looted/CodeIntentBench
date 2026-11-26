#!/usr/bin/env bash
# Build the knowledge base snapshot of a later Papra base commit from the stored April snapshot.
# Usage: snapshot.sh <base-sha> <workdir> [--store]
#   PAPRA_MIRROR  a clone of papra-hq/papra that has the base commit (default: $FENCEBENCH_CACHE_DIR/repos/papra.git)
#   BASE_PATCH    a teammate patch (relative to projects/papra, e.g. patches/hide-why.patch) applied on the
#                 base; the snapshot is then keyed <sha12>-<patch name>, as the harness names a patched base.
# The pinned kibi (arms/kibi/versions.env) must be on PATH. The workspace is <workdir>/ws-<sha12>, the
# check result <workdir>/check-<sha12>.json. With --store the tracked .kb/ files are copied to ../<sha12>/.kb.
set -euo pipefail
sha="$1"; work="$(mkdir -p "$2" && cd "$2" && pwd)"; store="${3:-}"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
mirror="${PAPRA_MIRROR:-${FENCEBENCH_CACHE_DIR:?set PAPRA_MIRROR or FENCEBENCH_CACHE_DIR}/repos/papra.git}"
from=884d4704106b
G="git -c user.name=kb -c user.email=kb@localhost"
full="$(git --git-dir="$mirror" rev-parse "$sha^{commit}")"; short="${full:0:12}"
if [ -n "${BASE_PATCH:-}" ]; then pname="$(basename "$BASE_PATCH")"; short="$short-${pname%.*}"; fi
ws="$work/ws-$short"

rm -rf "$ws" "$work/apply-ws-$short.log"
git clone --quiet --shared --no-checkout "$mirror" "$ws"
cd "$ws"
git checkout --quiet -B main "$full"
git remote remove origin
if [ -n "${BASE_PATCH:-}" ]; then git apply --whitespace=nowarn "$here/../../$BASE_PATCH" && $G commit -qa --no-verify -m "teammate patch"; fi
cp -R "$here/../$from/.kb" .kb
$G add -A .kb && $G commit -q --no-verify -m "kb: April snapshot"
kibi init > "$work/init-$short.log" 2>&1 || true
# kibi init edits tracked files (.gitignore, package.json); commit them so later steps see a clean source tree
$G commit -qa --no-verify -m "kibi init" || true

# 1. the later decisions that hold at this base, modeled; what they replace is closed
python3 "$here/apply.py" "$ws" --base "$full"
# 2. the functions that decide each requirement, re-read at this commit
python3 "$here/symbols.py" "$ws"
$G add -A .kb
kibi sync --refresh-symbol-coordinates > "$work/sync-$short.log" 2>&1 || { tail -30 "$work/sync-$short.log"; exit 1; }
# 3. test entities whose file moved away, and facts nothing links to any more
python3 "$here/symbols.py" "$ws" --prune-tests
python3 "$here/orphans.py" "$ws" --delete
$G add -A .kb
kibi sync --refresh-symbol-coordinates > "$work/sync-$short.log" 2>&1 || { tail -30 "$work/sync-$short.log"; exit 1; }
grep -E '^\s*failed ' "$work/sync-$short.log" || true
# 4. every declaration of a linked file gets its own symbol entry (the staged gate asks for one), and symbols
#    without test evidence are linked to the existing test files that run them (V8 coverage at this commit)
python3 "$here/declarations.py" "$ws"
$G add -A .kb
kibi sync --refresh-symbol-coordinates > "$work/sync-$short.log" 2>&1 || { tail -30 "$work/sync-$short.log"; exit 1; }
[ -d "$work/cov-$short" ] || "$here/coverage.sh" "$ws" "$work/cov-$short"
python3 "$here/coverage.py" "$ws" "$work/cov-$short"
$G add -A .kb
kibi sync --refresh-symbol-coordinates > "$work/sync-$short.log" 2>&1 || { tail -30 "$work/sync-$short.log"; exit 1; }
kibi check --format json > "$work/check-$short.json" 2>/dev/null || true
python3 - "$work/check-$short.json" <<'PY'
import collections, json, sys
d = json.load(open(sys.argv[1]))['structuredContent']
print('violations ', dict(collections.Counter(v['rule'] for v in d['violations'])))
print('diagnostics', dict(collections.Counter(q['id'] for q in d['qualityDiagnostics'])))
for v in d['violations']:
    if v['rule'] != 'symbol-coverage': print('V', v['rule'], v.get('entityId'), v.get('description', '')[:300])
for q in d['qualityDiagnostics']:
    if q['id'] != 'coverage_depth_review': print('Q', q['id'], q.get('entityId'), q['message'][:300])
PY
if [ "$store" = "--store" ]; then
  out="$here/../$short"; rm -rf "$out"; mkdir -p "$out"
  $G add -A .kb
  git ls-files -z -- .kb | while IFS= read -r -d '' f; do mkdir -p "$out/$(dirname "$f")"; cp "$f" "$out/$f"; done
  echo "stored $(git ls-files -- .kb | wc -l) files under $out/.kb"
fi
echo "ws=$ws"
