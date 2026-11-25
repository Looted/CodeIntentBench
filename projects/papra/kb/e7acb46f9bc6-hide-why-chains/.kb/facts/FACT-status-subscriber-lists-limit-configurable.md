---
title: status.subscriber_lists limit_configurable = False
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-status-subscriber-lists-maximum-count
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-259'
  recorded_at: '2026-04-16T08:22:46.000Z'
id: FACT-status-subscriber-lists-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-status-subscriber-lists-maximum-count so the claim can be checked for contradictions.
