---
title: docs.documentation_contributor_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: docs.documentation_contributor_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-31BE0852D45CACA0
claim_text: Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does
text_ref: REQ-docs-documentation-contributor-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-196'
  recorded_at: '2026-09-22T10:11:29.000Z'
id: FACT-docs-documentation-contributor-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among documentation contributor accounts gives the same answer as for one that does.

Modeled from REQ-docs-documentation-contributor-accounts-reset-unknown-address so the claim can be checked for contradictions.
