---
title: Empty string is treated as an empty object.
status: active
semantic_text: Empty string is treated as an empty object.
semantic_clauses:
  - Empty string is treated as an empty object
logic_claims:
  - CLAIM-90C2ADA0D54BE4F3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 753c283a3903d06fa672c196665887265da69d2473c1e6c15d4ce2a99793875c
semantic_inventory:
  - claim_key: CLAIM-90C2ADA0D54BE4F3
    claim_text: Empty string is treated as an empty object
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 42
    subjects:
      - documents.docling_options_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-713'
  recorded_at: '2025-02-07T15:47:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-empty-string-is-treated-as-empty-object
type: req
---
Empty string is treated as an empty object.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.schemas.test.ts (docling.content-extraction-strategy.schemas > doclingOptionsSchema).

## Source

Source: Papra server behaviour notes - SRV-713
