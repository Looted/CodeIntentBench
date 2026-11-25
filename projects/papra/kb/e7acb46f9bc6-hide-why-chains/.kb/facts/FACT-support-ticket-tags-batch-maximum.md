---
title: support.ticket_tags batch_maximum = 50
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: batch_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-84DD67D0B390CA27
claim_text: At most 50 ticket tags can be added or removed in one request in the support portal
text_ref: REQ-support-ticket-tags-batch-size
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-120'
  recorded_at: '2025-08-28T11:01:41.000Z'
id: FACT-support-ticket-tags-batch-maximum
type: fact
---
At most 50 ticket tags can be added or removed in one request in the support portal.

Modeled from REQ-support-ticket-tags-batch-size so the claim can be checked for contradictions.
