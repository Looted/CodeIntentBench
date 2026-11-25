---
title: When the response format is text, the whole string response is used as the extracted text.
status: active
semantic_text: When the response format is text, the whole string response is used as the extracted text.
semantic_clauses:
  - When the response format is text, the whole string response is used as the extracted text
logic_claims:
  - CLAIM-F513F306636AB1E2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 98b39fba9d67d97a400109a5f669a4d9c9d4a440abe31ed7cdd878a9ba4fff30
semantic_inventory:
  - claim_key: CLAIM-F513F306636AB1E2
    claim_text: When the response format is text, the whole string response is used as the extracted text
    role: condition
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-691'
  recorded_at: '2025-02-19T16:29:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-whole-string-response-is-used-as-extracted
type: req
---
When the response format is text, the whole string response is used as the extracted text.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is text).

## Source

Source: Papra server behaviour notes - SRV-691
