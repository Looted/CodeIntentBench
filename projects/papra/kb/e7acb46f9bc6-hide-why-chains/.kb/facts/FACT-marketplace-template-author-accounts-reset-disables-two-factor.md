---
title: marketplace.template_author_accounts reset_disables_two_factor = True
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: reset_disables_two_factor
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2E387E0EF010DD12
claim_text: Resetting the password of a template author account turns off two-factor authentication, which must be set up again
text_ref: REQ-marketplace-template-author-accounts-reset-and-two-factor
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-286'
  recorded_at: '2025-02-10T08:08:26.000Z'
id: FACT-marketplace-template-author-accounts-reset-disables-two-factor
type: fact
---
Resetting the password of a template author account turns off two-factor authentication, which must be set up again.

Modeled from REQ-marketplace-template-author-accounts-reset-and-two-factor so the claim can be checked for contradictions.
