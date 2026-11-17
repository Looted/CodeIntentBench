---
title: The status page requires STATUS_WEBHOOK_SECRET in every environment, development included.
status: active
semantic_text: The status page requires STATUS_WEBHOOK_SECRET in every environment, development included.
semantic_clauses:
  - The status page requires STATUS_WEBHOOK_SECRET in every environment, development included
logic_claims:
  - CLAIM-22FC3BD88F1AF097
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: eb3ca23dcc0117de424ace26342391b6c5f8dd7d533cb149adf34acd909be5be
semantic_inventory:
  - claim_key: CLAIM-22FC3BD88F1AF097
    claim_text: The status page requires STATUS_WEBHOOK_SECRET in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - status.status_webhook_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-234'
  recorded_at: '2026-08-08T13:18:47.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
rationale: Contributors should be able to start the service without any setup.
id: REQ-status-status-webhook-secret-development-default
type: req
---
The status page requires STATUS_WEBHOOK_SECRET in every environment, development included.

## Context

Contributors should be able to start the service without any setup.

## Source

> feat(status): STATUS_WEBHOOK_SECRET outside production (STA-234)

Source: Status page runbook - STA-234
