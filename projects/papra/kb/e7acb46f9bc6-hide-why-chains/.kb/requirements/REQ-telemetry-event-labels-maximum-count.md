---
title: At most 500 event labels can be created per project in the telemetry dashboard; the limit is configurable and 500 is the default.
status: active
semantic_text: At most 500 event labels can be created per project in the telemetry dashboard; the limit is configurable and 500 is the default.
semantic_clauses:
  - At most 500 event labels can be created per project in the telemetry dashboard
  - the limit is configurable and 500 is the default
logic_claims:
  - CLAIM-C5FB993911736B2E
  - CLAIM-6A130CE2C0015ADF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f4d7c5cac4558db3fdafa4e227b7421b8bbe5e7a9dcb26233a17281d6f648c39
semantic_inventory:
  - claim_key: CLAIM-C5FB993911736B2E
    claim_text: At most 500 event labels can be created per project in the telemetry dashboard
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - telemetry.event_labels
  - claim_key: CLAIM-6A130CE2C0015ADF
    claim_text: the limit is configurable and 500 is the default
    role: descriptive
    status: modeled
    span:
      start: 80
      end: 128
    subjects:
      - telemetry.event_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-134'
  recorded_at: '2026-01-09T13:58:20.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: An unbounded number of event labels had been used to store data the feature was never meant for.
id: REQ-telemetry-event-labels-maximum-count
type: req
---
At most 500 event labels can be created per project in the telemetry dashboard; the limit is configurable and 500 is the default.

## Context

An unbounded number of event labels had been used to store data the feature was never meant for.

## Source

> feat(telemetry): limit event labels per project (TEL-134)

Source: Telemetry dashboard decision log - TEL-134
