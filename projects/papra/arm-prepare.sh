#!/usr/bin/env bash
# Per-arm preparation of a Papra checkout for the arcs. Arguments: <workspace> <arm> <rulesDir> <runDir>
#
# The arcs run on an onboarded knowledge base: Papra's product decisions, harvested from its documentation,
# issue tracker, merged pull requests and in-repo spec and recorded with Kibi's bootstrap flow (kb/README.md),
# stored under kb/<base commit>/.kb. Every arm starts from the same knowledge:
#   - kibi, kibi-conv: the knowledge base is placed in the checkout, as a Kibi-onboarded repository ships it;
#     the arm's setup then installs the pinned Kibi and compiles it.
#   - every other arm: the knowledge base is exported into the rules directory (one rule per requirement,
#     Kibi's own prose) for the arm's setup to render into its container, and removed.
# Rule-mode tasks (the pilot's single-session tasks) are untouched: they keep the project's rule files.
set -euo pipefail
ws="$1"; arm="$2"; rules="$3"; run="$4"
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
harness="$(cd "$here/../../harness" && pwd)"
[ "${CIB_MODE:-task}" = "arc" ] || exit 0
cd "$ws"

base="$(git rev-parse HEAD | cut -c1-12)"
kb="$here/kb/$base/.kb"
if [ ! -d "$kb" ]; then echo "no onboarded knowledge base for base commit $base under $here/kb" >&2; exit 1; fi
rm -rf .kb
cp -R "$kb" .kb

case "$arm" in
  kibi|kibi-conv)
    ;;
  *)
    node "$harness/src/arm-tools/kb-export.ts" "$ws" "$rules"
    rm -rf .kb
    ;;
esac
