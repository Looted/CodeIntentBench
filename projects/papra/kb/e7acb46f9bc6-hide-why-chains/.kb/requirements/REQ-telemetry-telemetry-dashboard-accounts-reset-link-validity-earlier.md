---
title: Password reset links for telemetry dashboard accounts are valid for 10 minutes.
status: closed
semantic_text: Password reset links for telemetry dashboard accounts are valid for 10 minutes.
semantic_clauses:
  - Password reset links for telemetry dashboard accounts are valid for 10 minutes
logic_claims:
  - CLAIM-FFD7FE84834F0764
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4cb4be611772ea3a69cacbd1ce6f586fed970ca87a5f216958277bbf712ac6ef
semantic_inventory:
  - claim_key: CLAIM-FFD7FE84834F0764
    claim_text: Password reset links for telemetry dashboard accounts are valid for 10 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-252'
  recorded_at: '2025-12-01T15:47:39.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-dashboard-accounts-reset-link-validity-earlier
type: req
---
Password reset links for telemetry dashboard accounts are valid for 10 minutes.

## Context

Reason not stated.

## Source

> feat(telemetry): reset links valid 15 minutes (TEL-252)

Source: Telemetry dashboard decision log - TEL-252
