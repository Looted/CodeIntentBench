---
title: Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard.
status: active
semantic_text: Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard.
semantic_clauses:
  - Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard
logic_claims:
  - CLAIM-D7CAA0574476E64D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f13f5827906867acc0de4c65e3ac76846fd876d85776440d176e4dd0ea5889dd
semantic_inventory:
  - claim_key: CLAIM-D7CAA0574476E64D
    claim_text: Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - telemetry.dashboards
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-262'
  recorded_at: '2026-06-20T09:59:30.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Hand-set exceptions had been forgotten and never reviewed.
id: REQ-telemetry-dashboards-limit-override
type: req
---
Staff can raise or lower the dashboard limit for an individual user in the telemetry dashboard.

## Context

Hand-set exceptions had been forgotten and never reviewed.

## Source

> feat(telemetry): overriding the dashboard limit (TEL-262)

Source: Telemetry dashboard decision log - TEL-262
