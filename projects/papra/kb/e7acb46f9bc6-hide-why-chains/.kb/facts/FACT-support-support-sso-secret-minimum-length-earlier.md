---
title: support.support_sso_secret minimum_length = 16
status: deprecated
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-BD640325B8A30104
claim_text: SUPPORT_SSO_SECRET must be at least 16 characters long
text_ref: REQ-support-support-sso-secret-minimum-length-earlier
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-159'
  recorded_at: '2025-09-09T17:42:02.000Z'
id: FACT-support-support-sso-secret-minimum-length-earlier
type: fact
---
SUPPORT_SSO_SECRET must be at least 16 characters long.

Modeled from REQ-support-support-sso-secret-minimum-length-earlier so the claim can be checked for contradictions.
