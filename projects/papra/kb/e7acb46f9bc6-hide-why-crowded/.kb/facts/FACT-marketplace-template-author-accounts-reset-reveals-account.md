---
title: marketplace.template_author_accounts reset_reveals_account = False
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: reset_reveals_account
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-7A48D6D5306DFDF2
claim_text: Asking for a password reset for an address that has no account among template author accounts gives the same answer as for one that does
text_ref: REQ-marketplace-template-author-accounts-reset-unknown-address
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-261'
  recorded_at: '2026-03-16T09:05:28.000Z'
id: FACT-marketplace-template-author-accounts-reset-reveals-account
type: fact
---
Asking for a password reset for an address that has no account among template author accounts gives the same answer as for one that does.

Modeled from REQ-marketplace-template-author-accounts-reset-unknown-address so the claim can be checked for contradictions.
