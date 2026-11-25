---
title: support.support_sso_secret value_logged = False
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-0532B43CACEF630D
claim_text: The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs
text_ref: REQ-support-support-sso-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-261'
  recorded_at: '2025-11-24T17:22:05.000Z'
id: FACT-support-support-sso-secret-value-logged
type: fact
---
The support portal never writes SUPPORT_SSO_SECRET or a value derived from it to its logs.

Modeled from REQ-support-support-sso-secret-never-logged so the claim can be checked for contradictions.
