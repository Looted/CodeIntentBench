---
title: forum.forum_sso_secret missing_secret_warning = True
status: active
fact_kind: property_value
subject_key: forum.forum_sso_secret
property_key: missing_secret_warning
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-74CA22345F9A5AC3
claim_text: it logs a warning that values signed before a restart stop verifying
text_ref: REQ-forum-forum-sso-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-225'
  recorded_at: '2025-04-07T12:13:36.000Z'
id: FACT-forum-forum-sso-secret-missing-secret-warning
type: fact
---
It logs a warning that values signed before a restart stop verifying.

Modeled from REQ-forum-forum-sso-secret-generated-when-missing so the claim can be checked for contradictions.
