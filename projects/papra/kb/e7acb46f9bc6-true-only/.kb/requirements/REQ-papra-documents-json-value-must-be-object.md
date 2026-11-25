---
title: The JSON value must be an object.
status: active
semantic_text: The JSON value must be an object.
semantic_clauses:
  - The JSON value must be an object
logic_claims:
  - CLAIM-0F0F1794C73510E8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c788d456562606496ea1516f37b6b0053bcebb0b991c9326d2adeaaafb682ed9
semantic_inventory:
  - claim_key: CLAIM-0F0F1794C73510E8
    claim_text: The JSON value must be an object
    role: normative
    status: modeled
    span:
      start: 0
      end: 32
    subjects:
      - documents.docling_options_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-719'
  recorded_at: '2026-06-25T10:39:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-json-value-must-be-object
type: req
---
The JSON value must be an object.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.schemas.test.ts (docling.content-extraction-strategy.schemas > doclingOptionsSchema).

## Source

Source: Papra server behaviour notes - SRV-719
