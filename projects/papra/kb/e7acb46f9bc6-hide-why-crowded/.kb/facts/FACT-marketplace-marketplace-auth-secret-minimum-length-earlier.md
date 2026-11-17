---
title: marketplace.marketplace_auth_secret minimum_length = 16
status: deprecated
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-8A4D102C0C8081FA
claim_text: MARKETPLACE_AUTH_SECRET must be at least 16 characters long
text_ref: REQ-marketplace-marketplace-auth-secret-minimum-length-earlier
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-121'
  recorded_at: '2025-09-02T12:02:14.000Z'
id: FACT-marketplace-marketplace-auth-secret-minimum-length-earlier
type: fact
---
MARKETPLACE_AUTH_SECRET must be at least 16 characters long.

Modeled from REQ-marketplace-marketplace-auth-secret-minimum-length-earlier so the claim can be checked for contradictions.
