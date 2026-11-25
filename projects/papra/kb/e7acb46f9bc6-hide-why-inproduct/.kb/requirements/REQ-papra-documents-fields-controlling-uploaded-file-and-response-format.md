---
title: Fields controlling the uploaded file and response format are rejected.
status: active
semantic_text: Fields controlling the uploaded file and response format are rejected.
semantic_clauses:
  - Fields controlling the uploaded file and response format are rejected
logic_claims:
  - CLAIM-8F1056C4E261452E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6bceac348ca2159404871914811c32bfb55b45768be71e6880f11aa3b4051695
semantic_inventory:
  - claim_key: CLAIM-8F1056C4E261452E
    claim_text: Fields controlling the uploaded file and response format are rejected
    role: normative
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.docling_options_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-716'
  recorded_at: '2025-11-10T12:22:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-fields-controlling-uploaded-file-and-response-format
type: req
---
Fields controlling the uploaded file and response format are rejected.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/docling/docling.content-extraction-strategy.schemas.test.ts (docling.content-extraction-strategy.schemas > doclingOptionsSchema).

## Source

Source: Papra server behaviour notes - SRV-716
