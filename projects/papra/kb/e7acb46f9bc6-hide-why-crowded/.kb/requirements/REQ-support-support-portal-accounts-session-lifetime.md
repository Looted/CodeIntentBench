---
title: Sessions of support portal accounts last at most 90 days; they end after 720 minutes without activity.
status: active
semantic_text: Sessions of support portal accounts last at most 90 days; they end after 720 minutes without activity.
semantic_clauses:
  - Sessions of support portal accounts last at most 90 days
  - they end after 720 minutes without activity
logic_claims:
  - CLAIM-225C32A55454FEDE
  - CLAIM-875C1D77291FFCFF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0ea7b90f3e1ccab8de9274c837c641154d2f6d8f3c9b0726cd8afc9c58f3c58d
semantic_inventory:
  - claim_key: CLAIM-225C32A55454FEDE
    claim_text: Sessions of support portal accounts last at most 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - support.support_portal_accounts
  - claim_key: CLAIM-875C1D77291FFCFF
    claim_text: they end after 720 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 58
      end: 101
    subjects:
      - support.support_portal_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-379'
  recorded_at: '2026-01-05T14:20:58.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
id: REQ-support-support-portal-accounts-session-lifetime
type: req
---
Sessions of support portal accounts last at most 90 days; they end after 720 minutes without activity.

## Context

Reason not stated.

## Source

> feat(support): session lifetime (SUP-379)

Source: Support portal decision log - SUP-379
