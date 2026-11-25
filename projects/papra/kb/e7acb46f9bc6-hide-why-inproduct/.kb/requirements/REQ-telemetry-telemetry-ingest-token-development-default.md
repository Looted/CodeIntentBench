---
title: The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set.
status: active
semantic_text: The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set.
semantic_clauses:
  - The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set
logic_claims:
  - CLAIM-2BCB7AA988BB0040
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c3648edd34d51cf3f664eef4ef2748b02cc9044c5d49bd6e9864e6e74f3fd7e4
semantic_inventory:
  - claim_key: CLAIM-2BCB7AA988BB0040
    claim_text: The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set
    role: normative
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-189'
  recorded_at: '2026-04-21T16:55:16.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
rationale: Contributors should be able to start the service without any setup.
id: REQ-telemetry-telemetry-ingest-token-development-default
type: req
---
The telemetry relay uses a fixed development value outside production when TELEMETRY_INGEST_TOKEN is not set.

## Context

Contributors should be able to start the service without any setup.

## Source

> feat(telemetry): TELEMETRY_INGEST_TOKEN outside production (TEL-189)

Source: Telemetry dashboard decision log - TEL-189
