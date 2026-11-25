---
title: status.subscriber_lists maximum_count = 2
status: deprecated
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: maximum_count
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-E28E744285225A4D
claim_text: A status page can have at most 2 subscriber lists on the status page
text_ref: REQ-status-subscriber-lists-maximum-count-earlier
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-219'
  recorded_at: '2025-02-21T12:46:08.000Z'
id: FACT-status-subscriber-lists-maximum-count-earlier
type: fact
---
A status page can have at most 2 subscriber lists on the status page.

Modeled from REQ-status-subscriber-lists-maximum-count-earlier so the claim can be checked for contradictions.
