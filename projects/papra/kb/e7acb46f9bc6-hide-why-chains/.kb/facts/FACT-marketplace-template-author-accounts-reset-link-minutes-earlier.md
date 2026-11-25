---
title: marketplace.template_author_accounts reset_link_minutes = 30
status: deprecated
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: reset_link_minutes
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-F115434EF5E6BB04
claim_text: Password reset links for template author accounts are valid for 30 minutes
text_ref: REQ-marketplace-template-author-accounts-reset-link-validity-earlier
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-214'
  recorded_at: '2025-06-14T15:33:08.000Z'
id: FACT-marketplace-template-author-accounts-reset-link-minutes-earlier
type: fact
---
Password reset links for template author accounts are valid for 30 minutes.

Modeled from REQ-marketplace-template-author-accounts-reset-link-validity-earlier so the claim can be checked for contradictions.
