---
title: At most 10 password reset emails are sent per account per day for telemetry dashboard accounts.
status: active
semantic_text: At most 10 password reset emails are sent per account per day for telemetry dashboard accounts.
semantic_clauses:
  - At most 10 password reset emails are sent per account per day for telemetry dashboard accounts
logic_claims:
  - CLAIM-4A87308E62A4D993
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 08ff16bac918f7aba2650c8fa17e2901baa56f736285933772ee503cd6f384c9
semantic_inventory:
  - claim_key: CLAIM-4A87308E62A4D993
    claim_text: At most 10 password reset emails are sent per account per day for telemetry dashboard accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-325'
  recorded_at: '2025-05-26T10:42:06.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: The reset form had been used to flood a mailbox.
id: REQ-telemetry-telemetry-dashboard-accounts-reset-rate-limit
type: req
---
At most 10 password reset emails are sent per account per day for telemetry dashboard accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(telemetry): limit reset emails (TEL-325)

Source: Telemetry dashboard decision log - TEL-325
