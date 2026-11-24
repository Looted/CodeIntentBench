#!/usr/bin/env bash
# A teammate's commit between sessions: the webhook HTTP client moves into a delivery folder and is
# renamed (webhooks.http-client.ts -> delivery/webhook-delivery.client.ts, createWebhookHttpClient ->
# createDeliveryClient), with every import updated. Behaviour is unchanged. The teammate touches no
# store by hand; the harness runs the arm's own before-commit tooling before committing, as it does
# for a session, so whatever an arm keeps current by itself is current and the rest goes stale.
set -euo pipefail
ws="$1"
cd "$ws"
d=apps/papra-server/src/modules/webhooks
mkdir -p "$d/delivery"
git mv "$d/webhooks.http-client.ts" "$d/delivery/webhook-delivery.client.ts"
# the moved file is one level deeper: its relative imports gain a ../
sed -i -E "s#from '\.\./#from '../../#" "$d/delivery/webhook-delivery.client.ts"
git ls-files -z -- apps/papra-server/src | xargs -0 grep -lE "createWebhookHttpClient|webhooks\.http-client" 2>/dev/null | while read -r f; do
  sed -i -E \
    -e 's/createWebhookHttpClient/createDeliveryClient/g' \
    -e "s#'\./webhooks\.http-client'#'./delivery/webhook-delivery.client'#g" \
    -e "s#'\.\./webhooks\.http-client'#'../delivery/webhook-delivery.client'#g" \
    "$f"
done
echo "teammate: the webhook HTTP client moved to delivery/webhook-delivery.client.ts as createDeliveryClient"
