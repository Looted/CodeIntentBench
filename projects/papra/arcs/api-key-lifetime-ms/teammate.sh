#!/usr/bin/env bash
# A teammate's commit between sessions: the API-key use cases move to api-keys.issuing.ts and
# createApiKey becomes issueApiKey (the name the product uses: keys are "issued"), with every import
# and caller updated, tests included. Behaviour is unchanged. The teammate touches no store by hand;
# the harness runs the arm's own before-commit tooling before committing, as it does for a session,
# so whatever an arm keeps current by itself is current and the rest goes stale.
set -euo pipefail
ws="$1"
cd "$ws"
d=apps/papra-server/src/modules/api-keys
[ -f "$d/api-keys.usecases.ts" ] || { echo "teammate: $d/api-keys.usecases.ts is not there; nothing moved"; exit 0; }
git mv "$d/api-keys.usecases.ts" "$d/api-keys.issuing.ts"
if [ -f "$d/api-keys.usecases.test.ts" ]; then git mv "$d/api-keys.usecases.test.ts" "$d/api-keys.issuing.test.ts"; fi
git ls-files -z -- apps/papra-server/src | xargs -0 grep -lE "createApiKey\b|api-keys\.usecases" 2>/dev/null | while read -r f; do
  sed -i -E \
    -e 's/\bcreateApiKey\b/issueApiKey/g' \
    -e "s#api-keys\.usecases'#api-keys.issuing'#g" \
    "$f"
done || true
echo "teammate: api-keys.usecases.ts moved to api-keys.issuing.ts; createApiKey is now issueApiKey"
