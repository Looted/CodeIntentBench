---
title: At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard.
status: active
semantic_text: At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard.
semantic_clauses:
  - At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard
logic_claims:
  - CLAIM-A31F50EB09D8D65E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8cb7b5615e6eeb8b438570bde487b85385bf932102556bbb43c077200f2bcd23
semantic_inventory:
  - claim_key: CLAIM-A31F50EB09D8D65E
    claim_text: At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-121'
  recorded_at: '2026-01-18T17:50:32.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-dashboard-tags-batch-size
type: req
---
At most 10 dashboard tags can be added or removed in one request in the telemetry dashboard.

## Context

Reason not stated.

## Source

> feat(telemetry): batch dashboard tags, 10 per request (TEL-121)

Source: Telemetry dashboard decision log - TEL-121
