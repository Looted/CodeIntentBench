---
title: marketplace.marketplace_auth_secret value_source = environment only
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-87A3936D88842DAE
claim_text: The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file
text_ref: REQ-marketplace-marketplace-auth-secret-source
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-195'
  recorded_at: '2026-07-12T10:03:23.000Z'
id: FACT-marketplace-marketplace-auth-secret-value-source
type: fact
---
The template marketplace reads MARKETPLACE_AUTH_SECRET from the environment only, never from a configuration file.

Modeled from REQ-marketplace-marketplace-auth-secret-source so the claim can be checked for contradictions.
