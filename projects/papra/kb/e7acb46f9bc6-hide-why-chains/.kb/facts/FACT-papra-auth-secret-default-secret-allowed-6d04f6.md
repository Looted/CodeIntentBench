---
title: auth.secret default_secret_allowed = True
status: deprecated
fact_kind: property_value
subject_key: auth.secret
property_key: default_secret_allowed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A199E64E3F87E6E8
claim_text: The server uses a built-in default AUTH_SECRET when none is set
text_ref: REQ-papra-auth-secret-built-in-default
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-087'
  recorded_at: '2025-03-11T09:54:02.000Z'
id: FACT-papra-auth-secret-default-secret-allowed-6d04f6
type: fact
---
The server uses a built-in default AUTH_SECRET when none is set.

Modeled from REQ-papra-auth-secret-built-in-default so the claim can be checked for contradictions.
