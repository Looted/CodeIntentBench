---
title: status.subscriber_lists name_max_length = 64
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-F45FDBC44D19BAA5
claim_text: Subscriber list names on the status page are between 3 and 64 characters long
text_ref: REQ-status-subscriber-lists-name-length
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-277'
  recorded_at: '2026-02-17T15:28:41.000Z'
id: FACT-status-subscriber-lists-name-max-length
type: fact
---
Subscriber list names on the status page are between 3 and 64 characters long.

Modeled from REQ-status-subscriber-lists-name-length so the claim can be checked for contradictions.
