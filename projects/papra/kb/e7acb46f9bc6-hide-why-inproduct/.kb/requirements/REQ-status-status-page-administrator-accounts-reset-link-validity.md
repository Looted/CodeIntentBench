---
title: Password reset links for status page administrator accounts are valid for 60 minutes.
status: active
semantic_text: Password reset links for status page administrator accounts are valid for 60 minutes.
semantic_clauses:
  - Password reset links for status page administrator accounts are valid for 60 minutes
logic_claims:
  - CLAIM-1FC054A199CFF13C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 94bf2d6b123d4c6c97efb2c3f3dd4c4e291587c090c0d838df176bc90be9c9af
semantic_inventory:
  - claim_key: CLAIM-1FC054A199CFF13C
    claim_text: Password reset links for status page administrator accounts are valid for 60 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-171'
  recorded_at: '2025-09-28T13:37:46.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-administrator-accounts-reset-link-validity
type: req
---
Password reset links for status page administrator accounts are valid for 60 minutes.

## Context

Reason not stated.

## Why this changed

STA-171 replaced the value recorded in STA-116 and gives this reason for the change: Mail to some providers took longer than that to arrive.

## Source

> feat(status): reset links valid 60 minutes (STA-171)

Source: Status page runbook - STA-171
