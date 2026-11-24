#!/usr/bin/env bash
# Checks the hidden tests of invite-daily-cap-ms both ways on a reference checkout. usage: verify.sh <dir>
# (<dir> is created on first use: Papra at the pin with the teammate patch, installed and built.)
ARC_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
. "$ARC_DIR/../../check-arc-tests.sh"
edit() { python3 "$ARC_DIR/check/reference.py" "$REF" "$1" >/dev/null || { echo "reference edit $1 did not apply"; exit 1; }; }
T=src/modules/invitations/e2e
TEN=$T/invitation-daily-limit.test.ts; TWENTYFIVE=$T/invitation-daily-limit-25.test.ts
CAP=$T/invitation-mail-cap.e2e.test.ts; MESSAGE=$T/invitation-limit-message.e2e.test.ts

check_prepare "$1"
check_tests "base: s1's task test fails (the default is 30), the mail cap test passes" $TEN $CAP

edit s1; check_save c1
check_tests "s1 done (default 10): both pass" $TEN $CAP
check_suite "s1 done"

bash "$ARC_DIR/teammate.sh" "$REF" >/dev/null; check_save c3
check_tests "after the teammate's rename (s3): both pass" $TEN $CAP
check_suite "after the teammate's rename"

edit s4-remind
check_tests "s4 done the way the resend route does it, reminders not counted (violating): the mail cap test fails" $TEN $CAP
check_go c3; edit s4-remind-counted
check_tests "s4 done with reminders counted toward the day's limit (compliant): both pass" $TEN $CAP
check_go c3; edit s5; check_save c5
check_tests "s5 done, the refusal says the limit (compliant): all pass" $MESSAGE $TEN $CAP

edit s6; check_save c6
check_tests "s6 done (default 25): the 25 test and the mail cap test pass" $TWENTYFIVE $CAP
check_go c6
