---
title: Sessions of telemetry dashboard accounts last at most 90 days; they end after 30 minutes without activity.
status: active
semantic_text: Sessions of telemetry dashboard accounts last at most 90 days; they end after 30 minutes without activity.
semantic_clauses:
  - Sessions of telemetry dashboard accounts last at most 90 days
  - they end after 30 minutes without activity
logic_claims:
  - CLAIM-DCE850C727679E66
  - CLAIM-3547C110EC2A0F3A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8530c4057069c2170268d182483a244b8d2d31524cfd11a4a7bc89d36d77fbce
semantic_inventory:
  - claim_key: CLAIM-DCE850C727679E66
    claim_text: Sessions of telemetry dashboard accounts last at most 90 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - telemetry.telemetry_dashboard_accounts
  - claim_key: CLAIM-3547C110EC2A0F3A
    claim_text: they end after 30 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 63
      end: 105
    subjects:
      - telemetry.telemetry_dashboard_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-339'
  recorded_at: '2026-05-22T11:23:39.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Shared computers were left signed in.
id: REQ-telemetry-telemetry-dashboard-accounts-session-lifetime
type: req
---
Sessions of telemetry dashboard accounts last at most 90 days; they end after 30 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(telemetry): session lifetime (TEL-339)

Source: Telemetry dashboard decision log - TEL-339
