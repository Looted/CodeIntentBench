---
title: When the response format is json, a null response throws.
status: active
semantic_text: When the response format is json, a null response throws.
semantic_clauses:
  - When the response format is json, a null response throws
logic_claims:
  - CLAIM-7FA8C4422B393447
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 254b9f8282d011a3570dcbff4e3d10bdfd1079906547aa93992507ae04ace11a
semantic_inventory:
  - claim_key: CLAIM-7FA8C4422B393447
    claim_text: When the response format is json, a null response throws
    role: condition
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-678'
  recorded_at: '2025-12-10T15:53:20.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-null-response-throws
type: req
---
When the response format is json, a null response throws.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is json).

## Source

Source: Papra server behaviour notes - SRV-678
