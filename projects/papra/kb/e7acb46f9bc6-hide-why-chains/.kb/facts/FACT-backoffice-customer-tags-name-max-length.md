---
title: backoffice.customer_tags name_max_length = 24
status: active
fact_kind: property_value
subject_key: backoffice.customer_tags
property_key: name_max_length
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-4A365104E166923A
claim_text: Customer tag names in the Papra Cloud back office are limited to 24 characters
text_ref: REQ-backoffice-customer-tags-name-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-108'
  recorded_at: '2026-07-28T16:26:33.000Z'
id: FACT-backoffice-customer-tags-name-max-length
type: fact
---
Customer tag names in the Papra Cloud back office are limited to 24 characters.

Modeled from REQ-backoffice-customer-tags-name-length so the claim can be checked for contradictions.
