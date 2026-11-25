---
title: marketplace.marketplace_auth_secret rotation_overlap_hours = 72
status: active
fact_kind: property_value
subject_key: marketplace.marketplace_auth_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 72
claim_key: CLAIM-2B1E92178189FEAE
claim_text: the previous value stays valid for 72 hours after a rotation
text_ref: REQ-marketplace-marketplace-auth-secret-rotation
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-194'
  recorded_at: '2025-04-01T17:21:09.000Z'
id: FACT-marketplace-marketplace-auth-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 72 hours after a rotation.

Modeled from REQ-marketplace-marketplace-auth-secret-rotation so the claim can be checked for contradictions.
