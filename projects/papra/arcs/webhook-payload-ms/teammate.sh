#!/usr/bin/env bash
# A teammate's commit between sessions: the handlers that turn document events into webhook calls
# move from the documents module to the webhooks module and are renamed
# (documents/events/webhooks.<event>.ts -> webhooks/emitters/<event>.emitter.ts,
# registerTriggerWebhooksOn<Event>Handler -> register<Event>WebhookEmitter), their tests with them
# and every import updated. Behaviour is unchanged. The teammate touches no store by hand; the
# harness runs the arm's own before-commit tooling before committing, as it does for a session, so
# whatever an arm keeps current by itself is current and the rest goes stale.
set -euo pipefail
ws="$1"
cd "$ws"
m=apps/papra-server/src/modules
from="$m/documents/events"
to="$m/webhooks/emitters"
mkdir -p "$to"
moved=0
for f in "$from"/webhooks.*.ts; do
  [ -e "$f" ] || continue
  base="$(basename "$f")"            # webhooks.document-updated.ts, webhooks.document-updated.test.ts
  rest="${base#webhooks.}"           # document-updated.ts, document-updated.test.ts
  name="${rest%%.*}"                 # document-updated
  ext="${rest#"$name"}"              # .ts, .test.ts
  if git ls-files --error-unmatch "$f" >/dev/null 2>&1; then git mv "$f" "$to/$name.emitter$ext"; else mv "$f" "$to/$name.emitter$ext"; fi
  # A sibling the moved file imported from ./ stays where it was, unless it moved too.
  sed -i -E \
    -e "s#from '\./webhooks\.([a-z-]+)'#from './\1.emitter'#g" \
    -e "s#from '\./([^']+)'#from '../../documents/events/\1'#g" \
    -e "s#from '\.\./\.\./documents/events/([a-z-]+\.emitter)'#from './\1'#g" \
    -e "s#from '\.\./\.\./webhooks/#from '../#g" \
    -e "s#from '\.\./([a-z-]+\.[a-z.-]+)'#from '../../documents/\1'#g" \
    -e "s#from '\.\./\.\./documents/(webhooks\.[a-z.-]+)'#from '../\1'#g" \
    "$to/$name.emitter$ext"
  moved=$((moved + 1))
done
{ git ls-files -z -- apps/papra-server/src; git ls-files -z -o --exclude-standard -- apps/papra-server/src; } | xargs -0 grep -lE "registerTriggerWebhooksOn[A-Za-z]+Handler|documents/events/webhooks\.|events/webhooks\." 2>/dev/null | while read -r f; do
  sed -i -E \
    -e 's/registerTriggerWebhooksOn([A-Za-z]+)Handler/register\1WebhookEmitter/g' \
    -e "s#documents/events/webhooks\.([a-z-]+)'#webhooks/emitters/\1.emitter'#g" \
    -e "s#'\./events/webhooks\.([a-z-]+)'#'../webhooks/emitters/\1.emitter'#g" \
    "$f"
done || true
echo "teammate: $moved webhook handler files moved to webhooks/emitters/ and renamed register<Event>WebhookEmitter"
