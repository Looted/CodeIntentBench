---
title: mobile.push_relay_auth_key missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: mobile.push_relay_auth_key
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-mobile-push-relay-auth-key-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-279'
  recorded_at: '2025-08-15T10:37:03.000Z'
id: FACT-mobile-push-relay-auth-key-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-mobile-push-relay-auth-key-generated-when-missing so the claim can be checked for contradictions.
