---
title: Event label names in the telemetry dashboard are limited to 100 characters.
status: active
semantic_text: Event label names in the telemetry dashboard are limited to 100 characters.
semantic_clauses:
  - Event label names in the telemetry dashboard are limited to 100 characters
logic_claims:
  - CLAIM-0192AA681D3927D6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a4263a0f6a53db44449c2fcc6bc222bb96ed1aa72b8a2f2708b9aee202969861
semantic_inventory:
  - claim_key: CLAIM-0192AA681D3927D6
    claim_text: Event label names in the telemetry dashboard are limited to 100 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-116'
  recorded_at: '2026-01-07T12:24:18.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-event-labels-name-length
type: req
---
Event label names in the telemetry dashboard are limited to 100 characters.

## Context

Reason not stated.

## Source

> feat(telemetry): cap event label name length at 100 (TEL-116)

Source: Telemetry dashboard decision log - TEL-116
