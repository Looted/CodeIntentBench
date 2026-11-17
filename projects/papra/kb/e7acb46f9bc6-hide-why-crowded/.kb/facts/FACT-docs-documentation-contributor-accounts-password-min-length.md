---
title: docs.documentation_contributor_accounts password_min_length = 16
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-A7A9AA8BF4AD7490
claim_text: Passwords of documentation contributor accounts are at least 16 characters long
text_ref: REQ-docs-documentation-contributor-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-393'
  recorded_at: '2026-04-01T15:50:18.000Z'
id: FACT-docs-documentation-contributor-accounts-password-min-length
type: fact
---
Passwords of documentation contributor accounts are at least 16 characters long.

Modeled from REQ-docs-documentation-contributor-accounts-password-length so the claim can be checked for contradictions.
