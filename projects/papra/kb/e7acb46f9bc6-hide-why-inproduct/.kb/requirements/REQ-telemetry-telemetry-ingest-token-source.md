---
title: The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set.
status: active
semantic_text: The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set.
semantic_clauses:
  - The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set
logic_claims:
  - CLAIM-75F59B86A2DD4386
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ba13c215bce22e8b0a35ead0ddec48de59ffdffac405ca40280d62458800cd7d
semantic_inventory:
  - claim_key: CLAIM-75F59B86A2DD4386
    claim_text: The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set
    role: normative
    status: modeled
    span:
      start: 0
      end: 123
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-185'
  recorded_at: '2025-04-28T09:02:08.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-ingest-token-source
type: req
---
The telemetry relay reads TELEMETRY_INGEST_TOKEN from a file named by TELEMETRY_INGEST_TOKEN_FILE when that variable is set.

## Context

Reason not stated.

## Source

> feat(telemetry): where TELEMETRY_INGEST_TOKEN is read from (TEL-185)

Source: Telemetry dashboard decision log - TEL-185
