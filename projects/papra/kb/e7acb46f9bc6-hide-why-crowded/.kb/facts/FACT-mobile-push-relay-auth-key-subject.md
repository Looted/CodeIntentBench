---
title: PUSH_RELAY_AUTH_KEY, the relay authentication key of the mobile push relay
status: active
fact_kind: subject
subject_key: mobile.push_relay_auth_key
canonical_key: mobile.push_relay_auth_key
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: Mobile app decision log (apps/mobile)
  recorded_at: '2026-09-27T13:38:49.000Z'
id: FACT-mobile-push-relay-auth-key-subject
type: fact
---
PUSH_RELAY_AUTH_KEY holds the relay authentication key that the mobile push relay reads when it starts. It is a setting of that service alone and is not AUTH_SECRET, the secret of the Papra server.
