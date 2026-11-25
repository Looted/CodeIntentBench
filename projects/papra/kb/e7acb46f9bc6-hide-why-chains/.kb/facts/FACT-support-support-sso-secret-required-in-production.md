---
title: support.support_sso_secret required_in_production = False
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-F9D0B70080C9C7D9
claim_text: The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set
text_ref: REQ-support-support-sso-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-228'
  recorded_at: '2026-02-02T11:23:56.000Z'
id: FACT-support-support-sso-secret-required-in-production
type: fact
---
The support portal generates a random single sign-on secret at startup when SUPPORT_SSO_SECRET is not set.

Modeled from REQ-support-support-sso-secret-generated-when-missing so the claim can be checked for contradictions.
