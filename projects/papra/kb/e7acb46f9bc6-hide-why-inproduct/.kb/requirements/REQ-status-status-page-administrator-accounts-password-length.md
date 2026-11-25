---
title: Passwords of status page administrator accounts are at least 14 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of status page administrator accounts are at least 14 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of status page administrator accounts are at least 14 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-D4985D93DE0713D0
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6a0a4d5779b70ad083428e050aec43da22a61842bf8ae9679efd04251c8dc1ce
semantic_inventory:
  - claim_key: CLAIM-D4985D93DE0713D0
    claim_text: Passwords of status page administrator accounts are at least 14 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - status.status_page_administrator_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 81
      end: 121
    subjects:
      - status.status_page_administrator_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Status page runbook: STA-195'
  recorded_at: '2025-08-06T12:15:57.000Z'
tags:
  - bootstrap
  - knowledge-source:status-decisions
  - component:status
id: REQ-status-status-page-administrator-accounts-password-length
type: req
---
Passwords of status page administrator accounts are at least 14 characters long; there is no rule about character classes.

## Context

Reason not stated.

## Source

> feat(status): password minimum length 14 (STA-195)

Source: Status page runbook - STA-195
