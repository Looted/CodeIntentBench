#!/usr/bin/env bash
# Per-test-file V8 coverage of the server's unit suite at a base commit, for coverage.py.
# Usage: coverage.sh <ws> <out-dir> [jobs]
#   <ws> is a checkout of the base commit (the snapshot workspace); it is cloned so its worktree stays clean.
# Each unit test file (*.test.ts, not *.int.test.ts) runs on its own; its report lands in
# <out-dir>/<test path relative to apps/papra-server, / as _>/coverage-final.json.
set -euo pipefail
ws="$(cd "$1" && pwd)"; out="$(mkdir -p "$2" && cd "$2" && pwd)"; jobs="${3:-3}"
tmp="$out.checkout"; rm -rf "$tmp"
git clone --quiet --shared "$ws" "$tmp"
cd "$tmp"
pnpm install --frozen-lockfile > "$out.install.log" 2>&1
pnpm --filter "./packages/*" build > "$out.build.log" 2>&1
cd apps/papra-server
git ls-files '*.test.ts' | grep -v '\.int\.test\.ts$' | xargs -P"$jobs" -I{} sh -c '
  d="$1/$(echo "$2" | tr / _)"
  timeout 300 npx vitest run "$2" --coverage.enabled --coverage.provider=v8 --coverage.reporter=json --coverage.reportsDirectory="$d" --coverage.include="src/**" > "$d.log" 2>&1
  echo "$? $2"' _ "$out" {} > "$out.runs.txt"
awk '$1 != 0' "$out.runs.txt"
echo "$(wc -l < "$out.runs.txt") test files run"
