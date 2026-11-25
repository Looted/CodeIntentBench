---
title: When the response format is text, a non-string response throws.
status: active
semantic_text: When the response format is text, a non-string response throws.
semantic_clauses:
  - When the response format is text, a non-string response throws
logic_claims:
  - CLAIM-3CC763C94D07173D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a5448f3adb40a7bbc11eade9e0f5c19e43f103464405a60da65376a7e423b7b
semantic_inventory:
  - claim_key: CLAIM-3CC763C94D07173D
    claim_text: When the response format is text, a non-string response throws
    role: condition
    status: modeled
    span:
      start: 0
      end: 62
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-688'
  recorded_at: '2026-01-21T12:36:56.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-non-string-response-throws
type: req
---
When the response format is text, a non-string response throws.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is text).

## Source

Source: Papra server behaviour notes - SRV-688
