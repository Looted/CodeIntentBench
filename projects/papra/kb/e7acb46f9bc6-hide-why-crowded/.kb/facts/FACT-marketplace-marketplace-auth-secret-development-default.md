---
title: marketplace.marketplace_auth_secret development_default = fixed development value
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: development_default
operator: eq
value_type: string
value_string: fixed development value
claim_key: CLAIM-D72746F3D47DE39D
claim_text: The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set
text_ref: REQ-marketplace-marketplace-auth-secret-development-default
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-199'
  recorded_at: '2025-06-09T17:44:05.000Z'
id: FACT-marketplace-marketplace-auth-secret-development-default
type: fact
---
The template marketplace uses a fixed development value outside production when MARKETPLACE_AUTH_SECRET is not set.

Modeled from REQ-marketplace-marketplace-auth-secret-development-default so the claim can be checked for contradictions.
