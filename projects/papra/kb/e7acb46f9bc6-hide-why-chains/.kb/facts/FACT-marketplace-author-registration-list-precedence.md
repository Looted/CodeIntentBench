---
title: marketplace.author_registration list_precedence = allowed list wins
status: active
fact_kind: property_value
subject_key: marketplace.author_registration
property_key: list_precedence
operator: eq
value_type: string
value_string: allowed list wins
claim_key: CLAIM-FE24FF80C1CD21F2
claim_text: the allowed list wins over the block list
text_ref: REQ-marketplace-author-registration-blocked-domains
tags:
  - lane:strict
  - knowledge-source:marketplace-decisions
origin:
  kind: agent
  ref: 'Template marketplace decision log: MKT-215'
  recorded_at: '2026-07-03T17:50:20.000Z'
id: FACT-marketplace-author-registration-list-precedence
type: fact
---
The allowed list wins over the block list.

Modeled from REQ-marketplace-author-registration-blocked-domains so the claim can be checked for contradictions.
