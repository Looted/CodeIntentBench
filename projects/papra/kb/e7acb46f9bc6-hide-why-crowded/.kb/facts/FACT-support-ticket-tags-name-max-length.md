---
title: support.ticket_tags name_max_length = 64
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-77DE932DC0CAE0D5
claim_text: Ticket tag names in the support portal are limited to 64 characters
text_ref: REQ-support-ticket-tags-name-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-106'
  recorded_at: '2025-10-11T09:49:08.000Z'
id: FACT-support-ticket-tags-name-max-length
type: fact
---
Ticket tag names in the support portal are limited to 64 characters.

Modeled from REQ-support-ticket-tags-name-length so the claim can be checked for contradictions.
