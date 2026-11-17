---
title: When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well; matching ignores letter case.
status: active
semantic_text: When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-CFC2B74C38B60E6D
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9971b39c10ae5481dddeee7c97f3ec58f0358a4e389f1197a93cdc826a14ac0f
semantic_inventory:
  - claim_key: CLAIM-CFC2B74C38B60E6D
    claim_text: When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - status.status_subscriptions
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 125
      end: 153
    subjects:
      - status.status_subscriptions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-235'
  recorded_at: '2025-07-06T16:18:37.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Companies with regional subdomains asked for one entry to cover all of them.
id: REQ-status-status-subscriptions-allowed-domains
type: req
---
When an allowed-domain list is configured for status page subscriptions, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Companies with regional subdomains asked for one entry to cover all of them.

## Source

> feat(status): allowed email domains for status subscriptions (STA-235)

Source: Status page runbook - STA-235
