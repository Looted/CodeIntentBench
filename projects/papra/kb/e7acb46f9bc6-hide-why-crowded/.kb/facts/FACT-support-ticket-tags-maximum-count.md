---
title: support.ticket_tags maximum_count = 30
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: maximum_count
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-5F894DFF96BBD062
claim_text: At most 30 ticket tags can be created per site in the support portal
text_ref: REQ-support-ticket-tags-maximum-count
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-105'
  recorded_at: '2026-07-12T16:32:49.000Z'
id: FACT-support-ticket-tags-maximum-count
type: fact
---
At most 30 ticket tags can be created per site in the support portal.

Modeled from REQ-support-ticket-tags-maximum-count so the claim can be checked for contradictions.
