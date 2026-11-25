---
title: A completed password reset for telemetry dashboard accounts sends no confirmation email.
status: active
semantic_text: A completed password reset for telemetry dashboard accounts sends no confirmation email.
semantic_clauses:
  - A completed password reset for telemetry dashboard accounts sends no confirmation email
logic_claims:
  - CLAIM-336A4728AE7AD4AB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 285138a9b09d85d1f167f1f5380435c1794a4052b1de11e60071fc36f373868d
semantic_inventory:
  - claim_key: CLAIM-336A4728AE7AD4AB
    claim_text: A completed password reset for telemetry dashboard accounts sends no confirmation email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-329'
  recorded_at: '2025-06-24T09:48:07.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: The owner should hear about a reset they did not ask for.
id: REQ-telemetry-telemetry-dashboard-accounts-reset-notification
type: req
---
A completed password reset for telemetry dashboard accounts sends no confirmation email.

## Context

The owner should hear about a reset they did not ask for.

## Source

> feat(telemetry): notify after a password reset (TEL-329)

Source: Telemetry dashboard decision log - TEL-329
