---
title: Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it.
status: active
semantic_text: Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it.
semantic_clauses:
  - Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it
logic_claims:
  - CLAIM-D85D8BC6505B9B79
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 520cef01e3cad82178c196068af0db0222b2f00d54a2fe5ff42b38b78572c899
semantic_inventory:
  - claim_key: CLAIM-D85D8BC6505B9B79
    claim_text: Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it
    role: definition
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-122'
  recorded_at: '2026-04-13T17:09:51.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: A deleted event label silently disappeared from everything that used it and nobody could tell what had been there.
id: REQ-telemetry-event-labels-delete-in-use
type: req
---
Deleting an event label in the telemetry dashboard that is still in use is refused until nothing refers to it.

## Context

A deleted event label silently disappeared from everything that used it and nobody could tell what had been there.

## Source

> feat(telemetry): refuse deleting event labels in use (TEL-122)

Source: Telemetry dashboard decision log - TEL-122
