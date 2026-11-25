---
title: The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN.
status: active
semantic_text: The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN.
semantic_clauses:
  - The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN
logic_claims:
  - CLAIM-E9F55CB9C2B22EF9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae1679b4227d4561a33d12612969939e162a735f7b68c6e7570ca94684a3009e
semantic_inventory:
  - claim_key: CLAIM-E9F55CB9C2B22EF9
    claim_text: The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-174'
  recorded_at: '2026-05-20T09:32:00.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-ingest-token-required-in-production
type: req
---
The telemetry relay refuses to start in production without TELEMETRY_INGEST_TOKEN.

## Context

Reason not stated.

## Source

> feat(telemetry): require TELEMETRY_INGEST_TOKEN in production (TEL-174)

Source: Telemetry dashboard decision log - TEL-174
