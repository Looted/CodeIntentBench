---
title: At most 5 password reset emails are sent per account per day for infrastructure console accounts.
status: active
semantic_text: At most 5 password reset emails are sent per account per day for infrastructure console accounts.
semantic_clauses:
  - At most 5 password reset emails are sent per account per day for infrastructure console accounts
logic_claims:
  - CLAIM-3ACB3FE2520B293A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e869b9bcc28c5d647b8e73386af74d330f829d49ff1f4d35609295bad04a7cef
semantic_inventory:
  - claim_key: CLAIM-3ACB3FE2520B293A
    claim_text: At most 5 password reset emails are sent per account per day for infrastructure console accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 96
    subjects:
      - infra.infrastructure_console_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Infrastructure runbook: INF-180'
  recorded_at: '2026-05-16T13:35:34.000Z'
tags:
  - bootstrap
  - knowledge-source:infra-decisions
  - component:infra
id: REQ-infra-infrastructure-console-accounts-reset-rate-limit
type: req
---
At most 5 password reset emails are sent per account per day for infrastructure console accounts.

## Context

Reason not stated.

## Source

> feat(infra): limit reset emails (INF-180)

Source: Infrastructure runbook - INF-180
