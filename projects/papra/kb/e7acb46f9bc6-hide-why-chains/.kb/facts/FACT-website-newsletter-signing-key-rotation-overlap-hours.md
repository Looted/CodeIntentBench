---
title: website.newsletter_signing_key rotation_overlap_hours = 48
status: active
fact_kind: property_value
subject_key: website.newsletter_signing_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-40B0302E57698F6D
claim_text: the previous value stays valid for 48 hours after a rotation
text_ref: REQ-website-newsletter-signing-key-rotation
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-291'
  recorded_at: '2025-05-24T16:13:31.000Z'
id: FACT-website-newsletter-signing-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 48 hours after a rotation.

Modeled from REQ-website-newsletter-signing-key-rotation so the claim can be checked for contradictions.
