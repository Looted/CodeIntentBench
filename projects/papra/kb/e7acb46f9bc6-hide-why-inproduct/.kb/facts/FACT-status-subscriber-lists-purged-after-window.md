---
title: status.subscriber_lists purged_after_window = True
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-status-subscriber-lists-deletion-grace
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-163'
  recorded_at: '2025-08-07T08:21:22.000Z'
id: FACT-status-subscriber-lists-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-status-subscriber-lists-deletion-grace so the claim can be checked for contradictions.
