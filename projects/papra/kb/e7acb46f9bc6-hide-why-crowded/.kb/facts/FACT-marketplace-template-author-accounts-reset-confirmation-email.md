---
title: marketplace.template_author_accounts reset_confirmation_email = True
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: reset_confirmation_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7ED6C8BBD530A139
claim_text: A completed password reset for template author accounts is confirmed by an email to the account address
text_ref: REQ-marketplace-template-author-accounts-reset-notification
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-266'
  recorded_at: '2025-10-05T12:13:12.000Z'
id: FACT-marketplace-template-author-accounts-reset-confirmation-email
type: fact
---
A completed password reset for template author accounts is confirmed by an email to the account address.

Modeled from REQ-marketplace-template-author-accounts-reset-notification so the claim can be checked for contradictions.
