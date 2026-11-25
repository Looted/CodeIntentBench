---
title: TELEMETRY_INGEST_TOKEN must be at least 32 characters long.
status: active
semantic_text: TELEMETRY_INGEST_TOKEN must be at least 32 characters long.
semantic_clauses:
  - TELEMETRY_INGEST_TOKEN must be at least 32 characters long
logic_claims:
  - CLAIM-11A79868E0A62483
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8af304882f8a23339efa051924ebc213d51f30eaa0fe3ca0b7f4265a77082f8a
semantic_inventory:
  - claim_key: CLAIM-11A79868E0A62483
    claim_text: TELEMETRY_INGEST_TOKEN must be at least 32 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 58
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-238'
  recorded_at: '2026-06-20T16:43:18.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-ingest-token-minimum-length
type: req
---
TELEMETRY_INGEST_TOKEN must be at least 32 characters long.

## Context

Reason not stated.

## Source

> feat(telemetry): TELEMETRY_INGEST_TOKEN minimum length 32 (TEL-238)

Source: Telemetry dashboard decision log - TEL-238
