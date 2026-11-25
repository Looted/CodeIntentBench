---
title: Ensure the storage pattern is valid, it throws if the pattern contains invalid expressions or transformers.
status: active
semantic_text: Ensure the storage pattern is valid, it throws if the pattern contains invalid expressions or transformers.
semantic_clauses:
  - Ensure the storage pattern is valid, it throws if the pattern contains invalid expressions or transformers
logic_claims:
  - CLAIM-0255EADDD6F38A39
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 39e93b8720035d4a3573e97485fcb93722d7d66bee7022f5c362220628649e2a
semantic_inventory:
  - claim_key: CLAIM-0255EADDD6F38A39
    claim_text: Ensure the storage pattern is valid, it throws if the pattern contains invalid expressions or transformers
    role: normative
    status: modeled
    span:
      start: 0
      end: 106
    subjects:
      - documents.storage_pattern_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1335'
  recorded_at: '2026-09-25T10:40:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-ensure-storage-pattern-is-valid-it-throws
type: req
---
Ensure the storage pattern is valid, it throws if the pattern contains invalid expressions or transformers.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.schemas.test.ts (storage-pattern schemas > storagePatternSchema).

## Source

Source: Papra server behaviour notes - SRV-1335
