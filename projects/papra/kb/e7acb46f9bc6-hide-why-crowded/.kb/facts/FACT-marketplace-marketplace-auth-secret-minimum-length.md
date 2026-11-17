---
title: marketplace.marketplace_auth_secret minimum_length = 48
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-83C063B87B37D3DB
claim_text: MARKETPLACE_AUTH_SECRET must be at least 48 characters long
text_ref: REQ-marketplace-marketplace-auth-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-191'
  recorded_at: '2025-11-08T10:12:14.000Z'
id: FACT-marketplace-marketplace-auth-secret-minimum-length
type: fact
---
MARKETPLACE_AUTH_SECRET must be at least 48 characters long.

Modeled from REQ-marketplace-marketplace-auth-secret-minimum-length so the claim can be checked for contradictions.
