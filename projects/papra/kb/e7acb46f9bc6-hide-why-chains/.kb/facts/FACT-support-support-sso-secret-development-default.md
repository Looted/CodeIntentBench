---
title: support.support_sso_secret development_default = always required
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-38F914FC559F69B7
claim_text: The support portal requires SUPPORT_SSO_SECRET in every environment, development included
text_ref: REQ-support-support-sso-secret-development-default
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-264'
  recorded_at: '2026-08-08T17:50:11.000Z'
id: FACT-support-support-sso-secret-development-default
type: fact
---
The support portal requires SUPPORT_SSO_SECRET in every environment, development included.

Modeled from REQ-support-support-sso-secret-development-default so the claim can be checked for contradictions.
