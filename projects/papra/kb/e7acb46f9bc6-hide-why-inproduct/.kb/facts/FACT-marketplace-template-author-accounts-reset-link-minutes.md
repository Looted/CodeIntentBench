---
title: marketplace.template_author_accounts reset_link_minutes = 60
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-4CC0EF3183BC3E49
claim_text: Password reset links for template author accounts are valid for 60 minutes
text_ref: REQ-marketplace-template-author-accounts-reset-link-validity
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-186'
  recorded_at: '2025-06-22T16:09:45.000Z'
id: FACT-marketplace-template-author-accounts-reset-link-minutes
type: fact
---
Password reset links for template author accounts are valid for 60 minutes.

Modeled from REQ-marketplace-template-author-accounts-reset-link-validity so the claim can be checked for contradictions.
