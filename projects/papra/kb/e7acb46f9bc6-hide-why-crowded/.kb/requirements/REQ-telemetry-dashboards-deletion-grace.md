---
title: A deleted dashboard in the telemetry dashboard can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted dashboard in the telemetry dashboard can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted dashboard in the telemetry dashboard can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-34E77D0B1D2381E4
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4dbc41fc84f98374ba393ecffc9a1c7b959d12b4ffff8241170d1095d49315fb
semantic_inventory:
  - claim_key: CLAIM-34E77D0B1D2381E4
    claim_text: A deleted dashboard in the telemetry dashboard can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - telemetry.dashboards
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 76
      end: 109
    subjects:
      - telemetry.dashboards
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-275'
  recorded_at: '2026-07-18T12:45:04.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-telemetry-dashboards-deletion-grace
type: req
---
A deleted dashboard in the telemetry dashboard can be restored for 30 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(telemetry): 30-day restore window for dashboards (TEL-275)

Source: Telemetry dashboard decision log - TEL-275
