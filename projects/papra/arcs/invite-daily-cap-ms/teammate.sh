#!/usr/bin/env bash
# A teammate's commit between sessions: the daily invitation check gets the names the team uses for
# it ("the inviter's daily quota"), everywhere it is defined, called and tested:
#   checkIfUserHasReachedOrganizationInvitationLimit  -> assertInviterDailyQuota
#   getTodayUserInvitationCount                       -> countInvitationsSentToday
#   createUserOrganizationInvitationLimitReachedError -> createInviterDailyQuotaReachedError
# Behaviour, the setting and the error code are unchanged. The teammate touches no store by hand;
# the harness runs the arm's own before-commit tooling before committing, as it does for a session,
# so whatever an arm keeps current by itself is current and the rest goes stale.
set -euo pipefail
ws="$1"
cd "$ws"
{ git ls-files -z -- apps/papra-server/src; git ls-files -z -o --exclude-standard -- apps/papra-server/src; } \
  | xargs -0 grep -lE "checkIfUserHasReachedOrganizationInvitationLimit|getTodayUserInvitationCount|createUserOrganizationInvitationLimitReachedError" 2>/dev/null \
  | while read -r f; do
  sed -i -E \
    -e 's/\bcheckIfUserHasReachedOrganizationInvitationLimit\b/assertInviterDailyQuota/g' \
    -e 's/\bgetTodayUserInvitationCount\b/countInvitationsSentToday/g' \
    -e 's/\bcreateUserOrganizationInvitationLimitReachedError\b/createInviterDailyQuotaReachedError/g' \
    "$f"
done || true
echo "teammate: the daily invitation check is now assertInviterDailyQuota (countInvitationsSentToday, createInviterDailyQuotaReachedError)"
