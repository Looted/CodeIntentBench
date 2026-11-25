---
title: A deleted project in the telemetry dashboard can be restored for 30 days; after that it is removed for good.
status: active
semantic_text: A deleted project in the telemetry dashboard can be restored for 30 days; after that it is removed for good.
semantic_clauses:
  - A deleted project in the telemetry dashboard can be restored for 30 days
  - after that it is removed for good
logic_claims:
  - CLAIM-C3EE17FEE49D0403
  - CLAIM-7E91447BA9FA2D3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 013fe9c5a86b108b21450d0d131ce0288a0696065bb8357cf52139e91109a8cc
semantic_inventory:
  - claim_key: CLAIM-C3EE17FEE49D0403
    claim_text: A deleted project in the telemetry dashboard can be restored for 30 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - telemetry.projects
  - claim_key: CLAIM-7E91447BA9FA2D3B
    claim_text: after that it is removed for good
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 107
    subjects:
      - telemetry.projects
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-221'
  recorded_at: '2026-06-23T08:28:30.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Most deletions that were regretted were noticed within a week or two.
id: REQ-telemetry-projects-deletion-grace
type: req
---
A deleted project in the telemetry dashboard can be restored for 30 days; after that it is removed for good.

## Context

Most deletions that were regretted were noticed within a week or two.

## Source

> feat(telemetry): 30-day restore window for projects (TEL-221)

Source: Telemetry dashboard decision log - TEL-221
