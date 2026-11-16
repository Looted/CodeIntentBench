#!/usr/bin/env bash
# The same move as webhook-moved-stale (see its teammate.sh), by a careful teammate who also updates
# every store's pointers to the moved code: the decision files, AGENTS.md, the Kibi knowledge base and
# the memory and tracker stores in the run directory get the new path and name. This is the ceiling:
# every arm's links are current after the move.
set -euo pipefail
ws="$1"
"$(dirname "${BASH_SOURCE[0]}")/../webhook-moved-stale/teammate.sh" "$ws"
cd "$ws"
old_path='apps/papra-server/src/modules/webhooks/webhooks.http-client.ts'
new_path='apps/papra-server/src/modules/webhooks/delivery/webhook-delivery.client.ts'
relink() {
  sed -i -e "s#${old_path}#${new_path}#g" -e 's/createWebhookHttpClient/createDeliveryClient/g' "$1"
}
{ git ls-files -co --exclude-standard -z -- docs/decisions AGENTS.md CLAUDE.md .kb 2>/dev/null || true; } | while IFS= read -r -d '' f; do
  grep -qE "webhooks\.http-client|createWebhookHttpClient" "$f" && relink "$f"
done
for store in "${CIB_RUN_DIR:-/nonexistent}/memory.json" "${CIB_RUN_DIR:-/nonexistent}/tracker.json"; do
  [ -f "$store" ] && relink "$store"
done
echo "teammate: the store pointers now name delivery/webhook-delivery.client.ts and createDeliveryClient"
