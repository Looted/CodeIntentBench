---
title: support.support_sso_secret rotation_days = 60
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-30A49D7600A51B26
claim_text: SUPPORT_SSO_SECRET is rotated every 60 days
text_ref: REQ-support-support-sso-secret-rotation
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-245'
  recorded_at: '2026-06-15T15:59:23.000Z'
id: FACT-support-support-sso-secret-rotation-days
type: fact
---
SUPPORT_SSO_SECRET is rotated every 60 days.

Modeled from REQ-support-support-sso-secret-rotation so the claim can be checked for contradictions.
