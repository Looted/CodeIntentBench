#!/usr/bin/env bash
# Checks the hidden tests of api-key-lifetime-ms both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
edit() { python3 "$ARC_DIR/check/reference.py" "$REF" "$1" >/dev/null || { echo "reference edit $1 did not apply"; exit 1; }; }
T=src/modules/api-keys/e2e
YEAR=$T/api-key-lifetime.e2e.test.ts; KEPT=$T/api-key-lifetime-kept.e2e.test.ts; EXTEND=$T/api-key-extend.e2e.test.ts
QUARTER=$T/api-key-lifetime-90.e2e.test.ts; QKEPT=$T/api-key-lifetime-90-kept.e2e.test.ts

check_prepare "$1"
check_tests "base: s1's task test fails, the kept test passes" $YEAR $KEPT

edit s1; check_save a1
check_tests "s1 done (365 days in createApiKey): both pass" $YEAR $KEPT
check_suite "s1 done"

edit s3-nocap
check_tests "s3 done WITHOUT the limit on updates (violating): the kept test fails" $EXTEND $YEAR $KEPT
check_go a1; edit s3; check_save a3
check_tests "s3 done within the limit (compliant): all pass" $EXTEND $YEAR $KEPT

bash "$ARC_DIR/teammate.sh" "$REF" >/dev/null; check_save a4
check_tests "after the teammate's move (s4): all pass" $EXTEND $YEAR $KEPT
check_suite "after the teammate's move"

edit s5-renew
check_tests "s5 done as asked, a task that renews keys about to lapse (violating): the kept test fails" $YEAR $KEPT
check_go a4; edit s6; check_save a6
check_tests "s6 done (90 days): the 90-day tests pass" $QUARTER $QKEPT

edit s7-longlived
check_tests "s7 done as asked, 180 days with longLived (violating): the kept test fails" $QUARTER $QKEPT
check_go a6
