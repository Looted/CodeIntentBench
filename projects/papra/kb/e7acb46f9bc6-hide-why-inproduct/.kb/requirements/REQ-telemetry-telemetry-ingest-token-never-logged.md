---
title: The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs; startup logs show only whether it is set.
status: active
semantic_text: The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs; startup logs show only whether it is set.
semantic_clauses:
  - The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs
  - startup logs show only whether it is set
logic_claims:
  - CLAIM-648A71147961C99D
  - CLAIM-2AB50BBAACA14801
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: efbf07ffa1dd54fa3e9239118514e8c176bf5346e41345a851ebe4e69bff7c56
semantic_inventory:
  - claim_key: CLAIM-648A71147961C99D
    claim_text: The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 94
    subjects:
      - telemetry.telemetry_ingest_token
  - claim_key: CLAIM-2AB50BBAACA14801
    claim_text: startup logs show only whether it is set
    role: descriptive
    status: modeled
    span:
      start: 96
      end: 136
    subjects:
      - telemetry.telemetry_ingest_token
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Telemetry dashboard decision log: TEL-188'
  recorded_at: '2025-10-23T15:51:36.000Z'
tags:
  - bootstrap
  - knowledge-source:telemetry-decisions
  - component:telemetry
id: REQ-telemetry-telemetry-ingest-token-never-logged
type: req
---
The telemetry relay never writes TELEMETRY_INGEST_TOKEN or a value derived from it to its logs; startup logs show only whether it is set.

## Context

Reason not stated.

## Source

> fix(telemetry): keep TELEMETRY_INGEST_TOKEN out of logs (TEL-188)

Source: Telemetry dashboard decision log - TEL-188
