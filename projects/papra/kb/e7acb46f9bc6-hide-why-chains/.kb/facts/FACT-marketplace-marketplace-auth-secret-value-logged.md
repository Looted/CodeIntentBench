---
title: marketplace.marketplace_auth_secret value_logged = False
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-AAF75BF6522F92B2
claim_text: The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs
text_ref: REQ-marketplace-marketplace-auth-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-196'
  recorded_at: '2025-05-08T11:20:27.000Z'
id: FACT-marketplace-marketplace-auth-secret-value-logged
type: fact
---
The template marketplace never writes MARKETPLACE_AUTH_SECRET or a value derived from it to its logs.

Modeled from REQ-marketplace-marketplace-auth-secret-never-logged so the claim can be checked for contradictions.
