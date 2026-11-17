---
title: Addresses from disposable-mail domains are refused in status page subscriptions; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in status page subscriptions; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in status page subscriptions
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-AEF5A0E6DFD2D583
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 65d67c481c94d1df0ec30037229edd568e73871e60719c9740e6c9a776e5a0a6
semantic_inventory:
  - claim_key: CLAIM-AEF5A0E6DFD2D583
    claim_text: Addresses from disposable-mail domains are refused in status page subscriptions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - status.status_subscriptions
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 122
    subjects:
      - status.status_subscriptions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-243'
  recorded_at: '2026-08-07T17:44:05.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-subscriptions-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in status page subscriptions; the allowed list wins over the block list.

## Context

Reason not stated.

## Source

> feat(status): block disposable email domains (STA-243)

Source: Status page runbook - STA-243
