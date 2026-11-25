---
title: auth.secret generated_when_missing = True
status: deprecated
fact_kind: property_value
subject_key: auth.secret
property_key: generated_when_missing
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9D410B420499DA8B
claim_text: When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning
text_ref: REQ-papra-auth-secret-generated-at-startup
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-139'
  recorded_at: '2025-08-26T13:31:19.000Z'
id: FACT-papra-auth-secret-generated-when-missing-a5ba2e
type: fact
---
When AUTH_SECRET is not set in production, the server generates a random secret at startup and logs a warning.

Modeled from REQ-papra-auth-secret-generated-at-startup so the claim can be checked for contradictions.
