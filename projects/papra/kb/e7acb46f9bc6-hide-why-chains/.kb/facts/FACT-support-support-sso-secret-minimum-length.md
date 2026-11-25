---
title: support.support_sso_secret minimum_length = 40
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 40
claim_key: CLAIM-4A5BE36DC2460C17
claim_text: SUPPORT_SSO_SECRET must be at least 40 characters long
text_ref: REQ-support-support-sso-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-229'
  recorded_at: '2025-10-05T12:23:11.000Z'
id: FACT-support-support-sso-secret-minimum-length
type: fact
---
SUPPORT_SSO_SECRET must be at least 40 characters long.

Modeled from REQ-support-support-sso-secret-minimum-length so the claim can be checked for contradictions.
