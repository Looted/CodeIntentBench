---
title: status.status_subscriptions requests_per_ip_per_hour = 5
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: requests_per_ip_per_hour
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-A3F8D2204144B9F0
claim_text: At most 5 requests per IP address per hour are accepted in status page subscriptions
text_ref: REQ-status-status-subscriptions-rate-limit
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-247'
  recorded_at: '2026-04-19T09:54:51.000Z'
id: FACT-status-status-subscriptions-requests-per-ip-per-hour
type: fact
---
At most 5 requests per IP address per hour are accepted in status page subscriptions.

Modeled from REQ-status-status-subscriptions-rate-limit so the claim can be checked for contradictions.
