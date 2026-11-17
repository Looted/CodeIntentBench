---
title: status.status_subscriptions plus_addressing = folded
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: plus_addressing
operator: eq
value_type: string
value_string: folded
claim_key: CLAIM-21D9035CEAAE5513
claim_text: Plus-addressed emails in status page subscriptions are treated as the same address as the one without the plus part
text_ref: REQ-status-status-subscriptions-plus-addressing
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-245'
  recorded_at: '2025-12-09T08:33:37.000Z'
id: FACT-status-status-subscriptions-plus-addressing
type: fact
---
Plus-addressed emails in status page subscriptions are treated as the same address as the one without the plus part.

Modeled from REQ-status-status-subscriptions-plus-addressing so the claim can be checked for contradictions.
