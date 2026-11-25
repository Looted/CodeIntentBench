---
title: marketplace.template_author_accounts password_min_length = 16
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: password_min_length
operator: eq
value_type: int
value_int: 16
claim_key: CLAIM-C3017EA2CA1A0CF7
claim_text: Passwords of template author accounts are at least 16 characters long
text_ref: REQ-marketplace-template-author-accounts-password-length
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-213'
  recorded_at: '2025-06-15T08:56:52.000Z'
id: FACT-marketplace-template-author-accounts-password-min-length
type: fact
---
Passwords of template author accounts are at least 16 characters long.

Modeled from REQ-marketplace-template-author-accounts-password-length so the claim can be checked for contradictions.
