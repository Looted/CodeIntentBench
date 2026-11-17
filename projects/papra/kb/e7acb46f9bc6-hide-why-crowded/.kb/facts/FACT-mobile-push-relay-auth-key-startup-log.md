---
title: mobile.push_relay_auth_key startup_log = presence only
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-mobile-push-relay-auth-key-never-logged
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-303'
  recorded_at: '2026-05-15T14:54:55.000Z'
id: FACT-mobile-push-relay-auth-key-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-mobile-push-relay-auth-key-never-logged so the claim can be checked for contradictions.
