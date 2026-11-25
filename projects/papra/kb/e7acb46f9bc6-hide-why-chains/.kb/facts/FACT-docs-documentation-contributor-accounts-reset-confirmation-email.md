---
title: docs.documentation_contributor_accounts reset_confirmation_email = True
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F44D38CED5FB74A0
claim_text: A completed password reset for documentation contributor accounts is confirmed by an email to the account address
text_ref: REQ-docs-documentation-contributor-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-383'
  recorded_at: '2025-09-01T14:13:14.000Z'
id: FACT-docs-documentation-contributor-accounts-reset-confirmation-email
type: fact
---
A completed password reset for documentation contributor accounts is confirmed by an email to the account address.

Modeled from REQ-docs-documentation-contributor-accounts-reset-notification so the claim can be checked for contradictions.
