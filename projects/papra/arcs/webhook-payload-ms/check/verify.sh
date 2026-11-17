#!/usr/bin/env bash
# Checks the hidden tests of webhook-payload-ms both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
edit() { python3 "$ARC_DIR/check/reference.py" "$REF" "$1" >/dev/null || { echo "reference edit $1 did not apply"; exit 1; }; }
T=src/modules/webhooks/e2e
TEXT=$T/webhook-payload-text.e2e.test.ts; FLAG=$T/webhook-payload-flag.e2e.test.ts; NAMES=$T/webhook-payload-names.e2e.test.ts

check_prepare "$1"
check_tests "base: s1's task test fails (the text is in document:updated)" $TEXT

edit s1; check_save b1
check_tests "s1 done (content out of document:updated): passes" $TEXT
check_suite "s1 done"

edit s3; check_save b3
check_tests "s3 done, contentChanged true or false (compliant): all pass" $FLAG $TEXT

bash "$ARC_DIR/teammate.sh" "$REF" >/dev/null; check_save b4
check_tests "after the teammate's move (s4): all pass" $FLAG $TEXT
check_suite "after the teammate's move"

edit s5-excerpt
check_tests "s5 done as asked, an excerpt of the text (violating): the text test fails" $TEXT
check_go b4; edit s6; check_save b6
check_tests "s6 done (names out too): the names test passes" $NAMES
check_suite "s6 done"

edit s7-name
check_tests "s7 done as asked, the name in document:deleted (violating): the names test fails" $NAMES
check_go b6
