---
title: Resetting the password of a status page administrator account does not turn off two-factor authentication.
status: active
semantic_text: Resetting the password of a status page administrator account does not turn off two-factor authentication.
semantic_clauses:
  - Resetting the password of a status page administrator account does not turn off two-factor authentication
logic_claims:
  - CLAIM-39209C13EBB90D4D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: df489507e25b5bf8183b89a77bffa11d3a9144d6de1a06391491990d9ec860ff
semantic_inventory:
  - claim_key: CLAIM-39209C13EBB90D4D
    claim_text: Resetting the password of a status page administrator account does not turn off two-factor authentication
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 105
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-319'
  recorded_at: '2026-04-16T10:05:24.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-administrator-accounts-reset-and-two-factor
type: req
---
Resetting the password of a status page administrator account does not turn off two-factor authentication.

## Context

Reason not stated.

## Source

> feat(status): two-factor after a password reset (STA-319)

Source: Status page runbook - STA-319
