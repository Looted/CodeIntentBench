---
title: The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment.
status: active
semantic_text: The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment.
semantic_clauses:
  - The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment
logic_claims:
  - CLAIM-123BCED38747CB6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 69c02f20192e59c402bb7c6a8888c44515af8e0a129451b7f51774a0ceacc6b7
semantic_inventory:
  - claim_key: CLAIM-123BCED38747CB6D
    claim_text: The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 116
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-239'
  recorded_at: '2026-09-03T17:45:27.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-ingest-token-example-value-refused
type: req
---
The telemetry relay refuses the example value of TELEMETRY_INGEST_TOKEN from its documentation, in every environment.

## Context

Reason not stated.

## Source

> feat(telemetry): refuse the documented example TELEMETRY_INGEST_TOKEN (TEL-239)

Source: Telemetry dashboard decision log - TEL-239
