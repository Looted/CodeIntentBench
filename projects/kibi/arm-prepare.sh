#!/usr/bin/env bash
# Per-arm preparation of a Kibi checkout. Arguments: <workspace> <arm> <rulesDir> <runDir>
#
# The repository runs Kibi on itself: .kb/ holds its knowledge base, .claude/settings.json
# and .mcp.json wire the in-repo hook runner and MCP server, and AGENTS.md tells agents to
# use the kb_* tools. Every arm starts from the same code and the same knowledge:
#   - kibi, kibi-conv: the knowledge base stays; the repository's own Claude Code wiring is
#     removed so the pinned kibi-claude plugin and CLI (arms/kibi/setup) are the only Kibi
#     the agent gets, as for any user who installs Kibi on a project with an existing .kb/.
#   - every other arm: .kb/ is exported into the rules directory (one rule per requirement
#     and ADR, Kibi's own prose) for the arm's setup to render into its container, then
#     removed with the Kibi wiring and the Kibi sections of AGENTS.md.
set -euo pipefail
ws="$1"; arm="$2"; rules="$3"; run="$4"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
harness="$(cd "$here/../../harness" && pwd)"
cd "$ws"

rm -f .claude/settings.json .mcp.json
rmdir .claude 2>/dev/null || true

# The released SWI-Prolog runtime for the project's own Kibi (its tests spawn packages/cli/bin/kibi);
# project.yaml points KIBI_SWIPL at it. Versions follow arms/kibi/versions.env.
# shellcheck disable=SC1091
. "$here/../../arms/kibi/versions.env"
if [ ! -x "$run/swipl/node_modules/kibi-swipl-linux-x64-gnu/bin/swipl" ]; then
  mkdir -p "$run/swipl"
  ( cd "$run/swipl" && npm install --silent --no-audit --no-fund "kibi-swipl@${KIBI_SWIPL_PKG:-1.0.1}" )
fi

case "$arm" in
  kibi|kibi-conv)
    # Kibi's own usage policy for agents (AGENTS.md) stays: it is part of what a Kibi-onboarded repository ships.
    # The Kibi the agent talks to is the pinned release that arms/kibi/setup installs next to the workspace, not the
    # checkout's own build: the workspace's kibi-mcp link and CLI shims are removed so the plugin's launcher and PATH
    # resolve the release (the packages stay installed for the project's own tests).
    rm -f node_modules/kibi-mcp node_modules/.bin/kibi node_modules/.bin/kibi-mcp
    ;;
  *)
    node "$harness/src/arm-tools/kb-export.ts" "$ws" "$rules" --include adr
    node "$here/neutral-agents-md.ts" "$ws"
    rm -rf .kb
    # Kibi's own git hooks (kibi init) are not installed in a fresh clone; nothing else to strip.
    ;;
esac
