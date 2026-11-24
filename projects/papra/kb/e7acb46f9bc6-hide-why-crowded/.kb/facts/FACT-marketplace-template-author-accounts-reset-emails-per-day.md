---
title: marketplace.template_author_accounts reset_emails_per_day = 5
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: reset_emails_per_day
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-D56AF793FDDCA1B5
claim_text: At most 5 password reset emails are sent per account per day for template author accounts
text_ref: REQ-marketplace-template-author-accounts-reset-rate-limit
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-256'
  recorded_at: '2026-09-06T13:33:42.000Z'
id: FACT-marketplace-template-author-accounts-reset-emails-per-day
type: fact
---
At most 5 password reset emails are sent per account per day for template author accounts.

Modeled from REQ-marketplace-template-author-accounts-reset-rate-limit so the claim can be checked for contradictions.
