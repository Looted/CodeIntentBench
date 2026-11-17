---
title: support.support_sso_secret missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: support.support_sso_secret
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-support-support-sso-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-228'
  recorded_at: '2026-02-02T11:23:56.000Z'
id: FACT-support-support-sso-secret-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-support-support-sso-secret-generated-when-missing so the claim can be checked for contradictions.
