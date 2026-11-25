---
title: status.subscriber_lists restore_window_days = 90
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: restore_window_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-1683A147EEE2A984
claim_text: A deleted subscriber list on the status page can be restored for 90 days
text_ref: REQ-status-subscriber-lists-deletion-grace
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-163'
  recorded_at: '2025-08-07T08:21:22.000Z'
id: FACT-status-subscriber-lists-restore-window-days
type: fact
---
A deleted subscriber list on the status page can be restored for 90 days.

Modeled from REQ-status-subscriber-lists-deletion-grace so the claim can be checked for contradictions.
