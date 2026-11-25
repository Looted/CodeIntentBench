---
title: Event labels in the telemetry dashboard are listed alphabetically, ignoring letter case.
status: active
semantic_text: Event labels in the telemetry dashboard are listed alphabetically, ignoring letter case.
semantic_clauses:
  - Event labels in the telemetry dashboard are listed alphabetically, ignoring letter case
logic_claims:
  - CLAIM-09289A442619F0C3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3ed5487cfea225e5e9f104c84b44fccd25a3360eb51dfdd8e3149f26239509cc
semantic_inventory:
  - claim_key: CLAIM-09289A442619F0C3
    claim_text: Event labels in the telemetry dashboard are listed alphabetically, ignoring letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-119'
  recorded_at: '2026-08-16T08:16:25.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: The most used event labels are the ones picked again, so they come first.
id: REQ-telemetry-event-labels-listing-order
type: req
---
Event labels in the telemetry dashboard are listed alphabetically, ignoring letter case.

## Context

The most used event labels are the ones picked again, so they come first.

## Source

> feat(telemetry): order event labels alphabetically (TEL-119)

Source: Telemetry dashboard decision log - TEL-119
