---
title: Dashboard tags in the telemetry dashboard are listed in the order they were created.
status: active
semantic_text: Dashboard tags in the telemetry dashboard are listed in the order they were created.
semantic_clauses:
  - Dashboard tags in the telemetry dashboard are listed in the order they were created
logic_claims:
  - CLAIM-0934B66F01C2FDA8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a66c3d4d415c64f8f7e3a22aae098ef52c6c8e6664c71de08abe230fd1e4955e
semantic_inventory:
  - claim_key: CLAIM-0934B66F01C2FDA8
    claim_text: Dashboard tags in the telemetry dashboard are listed in the order they were created
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-115'
  recorded_at: '2026-09-18T12:20:51.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: People looked for a dashboard tag by name and could not find it in a list ordered by creation.
id: REQ-telemetry-dashboard-tags-listing-order
type: req
---
Dashboard tags in the telemetry dashboard are listed in the order they were created.

## Context

People looked for a dashboard tag by name and could not find it in a list ordered by creation.

## Source

> feat(telemetry): order dashboard tags in the order they were created (TEL-115)

Source: Telemetry dashboard decision log - TEL-115
