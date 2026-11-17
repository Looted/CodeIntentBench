---
title: support.support_sso_secret example_value_refused = True
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: example_value_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1080CAF5D97CFF8D
claim_text: The support portal refuses the example value of SUPPORT_SSO_SECRET from its documentation, in every environment
text_ref: REQ-support-support-sso-secret-example-value-refused
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-237'
  recorded_at: '2025-08-20T09:19:04.000Z'
id: FACT-support-support-sso-secret-example-value-refused
type: fact
---
The support portal refuses the example value of SUPPORT_SSO_SECRET from its documentation, in every environment.

Modeled from REQ-support-support-sso-secret-example-value-refused so the claim can be checked for contradictions.
