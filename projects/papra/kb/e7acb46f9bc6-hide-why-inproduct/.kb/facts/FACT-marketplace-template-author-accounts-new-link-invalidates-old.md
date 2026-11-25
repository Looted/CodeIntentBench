---
title: marketplace.template_author_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: marketplace.template_author_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-marketplace-template-author-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-187'
  recorded_at: '2026-06-26T16:46:52.000Z'
id: FACT-marketplace-template-author-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-marketplace-template-author-accounts-reset-link-single-use so the claim can be checked for contradictions.
