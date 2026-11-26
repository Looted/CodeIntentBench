#!/usr/bin/env bash
# Helpers for checking an arc's hidden tests both ways on a reference checkout of Papra: the tests
# must fail on the edit that breaks the decision and pass before it and on a change that keeps it.
# Sourced by an arc's check/verify.sh. No model runs; needs Node 26, pnpm and the project mirror.
#
#   check_prepare <dir> [patch]   clone Papra at the project pin into <dir> (with the teammate patch), install, build
#   check_save <name>             commit the working tree as branch <name>
#   check_go <name>               go back to branch <name>, dropping uncommitted changes
#   check_tests <label> <files>   copy the arc's hidden test files in, run them, print pass counts, remove them
#   check_suite <label>           run Papra's whole unit suite
set -uo pipefail
PAPRA_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PAPRA_PIN="$(sed -n 's/^commit: //p' "$PAPRA_DIR/project.yaml")"
_git() { git -c user.name=check -c user.email=check@example.com "$@"; }

check_prepare() {
  REF="$1"; local patch="${2:-patches/hide-why.patch}"
  if [ -d "$REF/.git" ] && _git -C "$REF" rev-parse --verify -q base >/dev/null; then check_go base; return; fi
  local mirror="${FENCEBENCH_CACHE_DIR:-$PAPRA_DIR/../../cache}/repos/papra.git"
  [ -d "$mirror" ] || git clone --quiet --mirror https://github.com/papra-hq/papra "$mirror"
  rm -rf "$REF"
  git clone --quiet --shared --no-checkout "$mirror" "$REF"
  _git -C "$REF" checkout --quiet -B main "$PAPRA_PIN"
  _git -C "$REF" apply --whitespace=nowarn "$PAPRA_DIR/$patch"
  (cd "$REF" && pnpm install --frozen-lockfile >/dev/null && pnpm --filter "./packages/*" build >/dev/null)
  check_save base
}

check_save() { _git -C "$REF" add -A && _git -C "$REF" checkout --quiet -B "$1" && _git -C "$REF" commit --quiet --allow-empty -m "$1"; }
check_go() { _git -C "$REF" checkout --quiet -f "$1" && _git -C "$REF" clean -qfd -e node_modules; }

check_tests() {
  local label="$1"; shift
  local copied=() f src dst out
  for f in "$@"; do
    src="$ARC_DIR/tests/apps/papra-server/$f"; dst="$REF/apps/papra-server/$f"
    [ -f "$src" ] || { echo "missing hidden test $f"; continue; }
    mkdir -p "$(dirname "$dst")"; cp "$src" "$dst"; copied+=("$dst")
  done
  out="$(mktemp)"
  (cd "$REF/apps/papra-server" && npx vitest run "$@" --reporter=json --outputFile="$out" >/dev/null 2>&1)
  echo "## $label"
  node -e '
    const r = JSON.parse(require("fs").readFileSync(process.argv[1], "utf8"));
    for (const f of r.testResults.sort((a, b) => a.name.localeCompare(b.name))) {
      const t = f.assertionResults;
      console.log(`  ${f.name.replace(/.*\//, "")}: ${t.filter((x) => x.status === "passed").length} of ${t.length} pass`);
      for (const x of t) if (x.status !== "passed") console.log(`      fails: ${x.title}`);
    }' "$out"
  rm -f "$out" "${copied[@]}"
}

check_suite() {
  echo "## $1: whole suite"
  (cd "$REF/apps/papra-server" && npx vitest run --exclude '**/*.int.test.ts' 2>&1 | grep -E '^ +(Test Files|Tests) ' | sed 's/^ */  /')
}
