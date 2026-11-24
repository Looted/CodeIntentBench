---
title: status.status_subscriptions disposable_domains_refused = True
status: active
fact_kind: property_value
subject_key: status.status_subscriptions
property_key: disposable_domains_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AEF5A0E6DFD2D583
claim_text: Addresses from disposable-mail domains are refused in status page subscriptions
text_ref: REQ-status-status-subscriptions-blocked-domains
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-243'
  recorded_at: '2026-08-07T17:44:05.000Z'
id: FACT-status-status-subscriptions-disposable-domains-refused
type: fact
---
Addresses from disposable-mail domains are refused in status page subscriptions.

Modeled from REQ-status-status-subscriptions-blocked-domains so the claim can be checked for contradictions.
