---
title: marketplace.marketplace_auth_secret required_in_production = False
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-3D953CE94AB42438
claim_text: The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set
text_ref: REQ-marketplace-marketplace-auth-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-120'
  recorded_at: '2025-12-08T10:32:23.000Z'
id: FACT-marketplace-marketplace-auth-secret-required-in-production
type: fact
---
The template marketplace generates a random session signing secret at startup when MARKETPLACE_AUTH_SECRET is not set.

Modeled from REQ-marketplace-marketplace-auth-secret-generated-when-missing so the claim can be checked for contradictions.
