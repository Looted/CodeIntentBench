---
title: An user can have at most 3 dashboards in the telemetry dashboard.
status: closed
semantic_text: An user can have at most 3 dashboards in the telemetry dashboard.
semantic_clauses:
  - An user can have at most 3 dashboards in the telemetry dashboard
logic_claims:
  - CLAIM-81E06316840757F4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ced5fd904c96c31644e8a7d780e10a35ff8498bc547c2b5ed8fcd5153f1ce213
semantic_inventory:
  - claim_key: CLAIM-81E06316840757F4
    claim_text: An user can have at most 3 dashboards in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - telemetry.dashboards
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-205'
  recorded_at: '2025-11-05T17:42:06.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-dashboards-maximum-count-earlier
type: req
---
An user can have at most 3 dashboards in the telemetry dashboard.

## Context

Reason not stated.

## Source

> feat(telemetry): limit dashboards per user (TEL-205)

Source: Telemetry dashboard decision log - TEL-205
