---
title: TELEMETRY_INGEST_TOKEN is rotated every 60 days; the previous value stays valid for 24 hours after a rotation.
status: active
semantic_text: TELEMETRY_INGEST_TOKEN is rotated every 60 days; the previous value stays valid for 24 hours after a rotation.
semantic_clauses:
  - TELEMETRY_INGEST_TOKEN is rotated every 60 days
  - the previous value stays valid for 24 hours after a rotation
logic_claims:
  - CLAIM-DBBEFA6CD5EA363D
  - CLAIM-A45280A30BC5D577
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f9e999370b0528c518dfc026b910582bdcf1cbf8deb8a8471c9b750b10aa97f6
semantic_inventory:
  - claim_key: CLAIM-DBBEFA6CD5EA363D
    claim_text: TELEMETRY_INGEST_TOKEN is rotated every 60 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - telemetry.telemetry_ingest_token
  - claim_key: CLAIM-A45280A30BC5D577
    claim_text: the previous value stays valid for 24 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 49
      end: 109
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-184'
  recorded_at: '2025-06-22T08:48:38.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-ingest-token-rotation
type: req
---
TELEMETRY_INGEST_TOKEN is rotated every 60 days; the previous value stays valid for 24 hours after a rotation.

## Context

Reason not stated.

## Source

> chore(telemetry): rotate TELEMETRY_INGEST_TOKEN every 60 days (TEL-184)

Source: Telemetry dashboard decision log - TEL-184
