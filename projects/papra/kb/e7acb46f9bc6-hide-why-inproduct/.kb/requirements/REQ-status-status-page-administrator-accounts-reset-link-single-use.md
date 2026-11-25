---
title: A password reset link for status page administrator accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for status page administrator accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for status page administrator accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-7E9036CC68543B5E
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: acd7044c7b39972cc67e94de94db3b0e080e3099a540b11b72b26c6ab95b90d6
semantic_inventory:
  - claim_key: CLAIM-7E9036CC68543B5E
    claim_text: A password reset link for status page administrator accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - status.status_page_administrator_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 123
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-176'
  recorded_at: '2026-06-12T12:02:09.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-administrator-accounts-reset-link-single-use
type: req
---
A password reset link for status page administrator accounts works once; requesting a new link invalidates the earlier ones.

## Context

Reason not stated.

## Source

> feat(status): single-use reset links (STA-176)

Source: Status page runbook - STA-176
