---
title: status.status_subscriptions allowed_domain_matching = domain and subdomains
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: allowed_domain_matching
operator: eq
value_type: string
value_string: domain and subdomains
claim_key: CLAIM-CFC2B74C38B60E6D
claim_text: When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well
text_ref: REQ-status-status-subscriptions-allowed-domains
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-235'
  recorded_at: '2025-07-06T16:18:37.000Z'
id: FACT-status-status-subscriptions-allowed-domain-matching
type: fact
---
When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well.

Modeled from REQ-status-status-subscriptions-allowed-domains so the claim can be checked for contradictions.
