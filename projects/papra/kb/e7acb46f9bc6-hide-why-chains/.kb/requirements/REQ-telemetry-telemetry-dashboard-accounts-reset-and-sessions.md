---
title: Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others.
status: active
semantic_text: Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others.
semantic_clauses:
  - Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others
logic_claims:
  - CLAIM-85BE9104B6D26368
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ef301790600c5612073652ba2bef6b2ed4ade887b3c799778b902579a0671f52
semantic_inventory:
  - claim_key: CLAIM-85BE9104B6D26368
    claim_text: Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 118
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-321'
  recorded_at: '2025-02-21T17:15:19.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-accounts-reset-and-sessions
type: req
---
Resetting the password of a telemetry dashboard account keeps the session that performed the reset and ends all others.

## Context

Reason not stated.

## Source

> feat(telemetry): sessions after a password reset (TEL-321)

Source: Telemetry dashboard decision log - TEL-321
