---
title: Event labels in the telemetry dashboard are unique per project regardless of letter case; a duplicate is reported as event-label-already-exists.
status: active
semantic_text: Event labels in the telemetry dashboard are unique per project regardless of letter case; a duplicate is reported as event-label-already-exists.
semantic_clauses:
  - Event labels in the telemetry dashboard are unique per project regardless of letter case
  - a duplicate is reported as event-label-already-exists
logic_claims:
  - CLAIM-786A18A538F3C3DA
  - CLAIM-3277E74BC5BE22BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6c311bd5ba1a08a2453c85ccb5a7a9fda3a5d7068e49a3a66299f65324703e5f
semantic_inventory:
  - claim_key: CLAIM-786A18A538F3C3DA
    claim_text: Event labels in the telemetry dashboard are unique per project regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - telemetry.event_labels
  - claim_key: CLAIM-3277E74BC5BE22BD
    claim_text: a duplicate is reported as event-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 90
      end: 143
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-105'
  recorded_at: '2025-04-21T09:16:57.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Two event labels that differed only by capitalisation were being created by accident and then merged by hand.
id: REQ-telemetry-event-labels-unique-ignoring-case
type: req
---
Event labels in the telemetry dashboard are unique per project regardless of letter case; a duplicate is reported as event-label-already-exists.

## Context

Two event labels that differed only by capitalisation were being created by accident and then merged by hand.

## Source

> feat(telemetry): case-insensitive unique event label names (TEL-105)

Source: Telemetry dashboard decision log - TEL-105
