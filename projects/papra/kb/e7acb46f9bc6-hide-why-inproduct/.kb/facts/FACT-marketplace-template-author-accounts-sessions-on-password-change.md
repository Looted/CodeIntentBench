---
title: marketplace.template_author_accounts sessions_on_password_change = none ended
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: sessions_on_password_change
operator: eq
value_type: string
value_string: none ended
claim_key: CLAIM-57B9F38C547084F3
claim_text: Changing a password from the settings of a template author account, as opposed to resetting it, keeps every session
text_ref: REQ-marketplace-template-author-accounts-password-change
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-220'
  recorded_at: '2025-05-14T12:41:03.000Z'
id: FACT-marketplace-template-author-accounts-sessions-on-password-change
type: fact
---
Changing a password from the settings of a template author account, as opposed to resetting it, keeps every session.

Modeled from REQ-marketplace-template-author-accounts-password-change so the claim can be checked for contradictions.
