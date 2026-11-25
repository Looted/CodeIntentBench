#!/usr/bin/env bash
# Applies the proof-ready spec to a Kibi workspace with Kibi's own operations: the proof integration from
# `kibi proof inspect`, then per requirement its failure-side facts, scenarios, the test's proof contract and
# step file, coverage of the requirement's code by that test, and the tested floor; then proves each test.
# Arguments: <workspace> <runDir>
set -euo pipefail
here="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
exec node "$here/apply.mjs" "$here/spec.json" "$1" "$2"
