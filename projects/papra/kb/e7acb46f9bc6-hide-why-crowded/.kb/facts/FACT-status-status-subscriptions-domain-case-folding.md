---
title: status.status_subscriptions domain_case_folding = True
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: domain_case_folding
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-77F80A293A9D87BD
claim_text: matching ignores letter case
text_ref: REQ-status-status-subscriptions-allowed-domains
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-235'
  recorded_at: '2025-07-06T16:18:37.000Z'
id: FACT-status-status-subscriptions-domain-case-folding
type: fact
---
Matching ignores letter case.

Modeled from REQ-status-status-subscriptions-allowed-domains so the claim can be checked for contradictions.
