---
title: support.support_sso_secret value_source = environment only
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: value_source
operator: eq
value_type: string
value_string: environment only
claim_key: CLAIM-32B6C09B9DADDD18
claim_text: The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file
text_ref: REQ-support-support-sso-secret-source
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-253'
  recorded_at: '2025-09-14T10:26:33.000Z'
id: FACT-support-support-sso-secret-value-source
type: fact
---
The support portal reads SUPPORT_SSO_SECRET from the environment only, never from a configuration file.

Modeled from REQ-support-support-sso-secret-source so the claim can be checked for contradictions.
