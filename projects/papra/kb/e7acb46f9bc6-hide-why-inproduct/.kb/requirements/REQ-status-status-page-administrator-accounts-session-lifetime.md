---
title: Sessions of status page administrator accounts last at most 1 day; they end after 15 minutes without activity.
status: active
semantic_text: Sessions of status page administrator accounts last at most 1 day; they end after 15 minutes without activity.
semantic_clauses:
  - Sessions of status page administrator accounts last at most 1 day
  - they end after 15 minutes without activity
logic_claims:
  - CLAIM-54A4D24DAD046A55
  - CLAIM-2238FCD1AB876B7A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e39b49b2b45d95219704864d42e2b0d4dac803aee8cc81d41bf26124f0f713fb
semantic_inventory:
  - claim_key: CLAIM-54A4D24DAD046A55
    claim_text: Sessions of status page administrator accounts last at most 1 day
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 65
    subjects:
      - status.status_page_administrator_accounts
  - claim_key: CLAIM-2238FCD1AB876B7A
    claim_text: they end after 15 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 67
      end: 109
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-188'
  recorded_at: '2025-05-13T12:56:08.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-administrator-accounts-session-lifetime
type: req
---
Sessions of status page administrator accounts last at most 1 day; they end after 15 minutes without activity.

## Context

Reason not stated.

## Source

> feat(status): session lifetime (STA-188)

Source: Status page runbook - STA-188
