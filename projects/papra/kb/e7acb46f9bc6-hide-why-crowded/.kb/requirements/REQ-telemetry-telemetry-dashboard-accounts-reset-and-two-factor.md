---
title: Resetting the password of a telemetry dashboard account does not turn off two-factor authentication.
status: active
semantic_text: Resetting the password of a telemetry dashboard account does not turn off two-factor authentication.
semantic_clauses:
  - Resetting the password of a telemetry dashboard account does not turn off two-factor authentication
logic_claims:
  - CLAIM-F65BAB2678FC2494
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c326f1d2b15b53bbbbd6066ea21fc8da26fb7644c823eaffa0109c49d8c03b7e
semantic_inventory:
  - claim_key: CLAIM-F65BAB2678FC2494
    claim_text: Resetting the password of a telemetry dashboard account does not turn off two-factor authentication
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-347'
  recorded_at: '2026-09-02T17:45:18.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-accounts-reset-and-two-factor
type: req
---
Resetting the password of a telemetry dashboard account does not turn off two-factor authentication.

## Context

Reason not stated.

## Source

> feat(telemetry): two-factor after a password reset (TEL-347)

Source: Telemetry dashboard decision log - TEL-347
