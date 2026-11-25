---
title: marketplace.marketplace_auth_secret rotation_days = 30
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-98BC7E3C4ED3A546
claim_text: MARKETPLACE_AUTH_SECRET is rotated every 30 days
text_ref: REQ-marketplace-marketplace-auth-secret-rotation
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-126'
  recorded_at: '2025-04-01T17:21:09.000Z'
id: FACT-marketplace-marketplace-auth-secret-rotation-days
type: fact
---
MARKETPLACE_AUTH_SECRET is rotated every 30 days.

Modeled from REQ-marketplace-marketplace-auth-secret-rotation so the claim can be checked for contradictions.
