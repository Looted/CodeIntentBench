---
title: Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-FE2326B2421A4A51
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ebe6eaef61ce0f1d583d75eb498a761dae20bbd383d7bcdaecb1a59061916d02
semantic_inventory:
  - claim_key: CLAIM-FE2326B2421A4A51
    claim_text: Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - telemetry.dashboard_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-118'
  recorded_at: '2025-02-22T17:44:35.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: A deleted dashboard tag silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-telemetry-dashboard-tags-delete-in-use
type: req
---
Deleting a dashboard tag in the telemetry dashboard that is still in use is refused until nothing refers to it.

## Context

A deleted dashboard tag silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(telemetry): refuse deleting dashboard tags in use (TEL-118)

Source: Telemetry dashboard decision log - TEL-118
