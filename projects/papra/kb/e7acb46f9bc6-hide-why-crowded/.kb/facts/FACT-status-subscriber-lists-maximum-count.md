---
title: status.subscriber_lists maximum_count = 5
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: maximum_count
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-13A7998C1E8D287C
claim_text: A status page can have at most 5 subscriber lists on the status page
text_ref: REQ-status-subscriber-lists-maximum-count
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-259'
  recorded_at: '2026-04-16T08:22:46.000Z'
id: FACT-status-subscriber-lists-maximum-count
type: fact
---
A status page can have at most 5 subscriber lists on the status page.

Modeled from REQ-status-subscriber-lists-maximum-count so the claim can be checked for contradictions.
