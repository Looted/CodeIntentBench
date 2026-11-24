---
title: status.status_subscriptions list_precedence = allowed list wins
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: list_precedence
operator: eq
value_type: string
value_string: allowed list wins
claim_key: CLAIM-FE24FF80C1CD21F2
claim_text: the allowed list wins over the block list
text_ref: REQ-status-status-subscriptions-blocked-domains
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-243'
  recorded_at: '2026-08-07T17:44:05.000Z'
id: FACT-status-status-subscriptions-list-precedence
type: fact
---
The allowed list wins over the block list.

Modeled from REQ-status-status-subscriptions-blocked-domains so the claim can be checked for contradictions.
