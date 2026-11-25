---
title: At most 50 event labels can be added or removed in one request in the telemetry dashboard.
status: active
semantic_text: At most 50 event labels can be added or removed in one request in the telemetry dashboard.
semantic_clauses:
  - At most 50 event labels can be added or removed in one request in the telemetry dashboard
logic_claims:
  - CLAIM-8E1FFCDE7D9DF750
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 47c9fed391cb9fa9744799dbfbbe0c857a2523dcb542e714c00fe3072fbb4c07
semantic_inventory:
  - claim_key: CLAIM-8E1FFCDE7D9DF750
    claim_text: At most 50 event labels can be added or removed in one request in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-151'
  recorded_at: '2025-07-06T10:37:04.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-event-labels-batch-size
type: req
---
At most 50 event labels can be added or removed in one request in the telemetry dashboard.

## Context

Reason not stated.

## Source

> feat(telemetry): batch event labels, 50 per request (TEL-151)

Source: Telemetry dashboard decision log - TEL-151
