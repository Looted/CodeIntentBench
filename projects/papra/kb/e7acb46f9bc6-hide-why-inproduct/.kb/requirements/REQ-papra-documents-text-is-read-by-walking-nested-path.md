---
title: When the response format is json, the text is read by walking a nested path.
status: active
semantic_text: When the response format is json, the text is read by walking a nested path.
semantic_clauses:
  - When the response format is json, the text is read by walking a nested path
logic_claims:
  - CLAIM-20B6570284E034D3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e84cc0d4e2740ad6abb61f12103cea580d94748bc5173dd3992dff2dc29dad5d
semantic_inventory:
  - claim_key: CLAIM-20B6570284E034D3
    claim_text: When the response format is json, the text is read by walking a nested path
    role: condition
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-681'
  recorded_at: '2026-06-10T09:18:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-text-is-read-by-walking-nested-path
type: req
---
When the response format is json, the text is read by walking a nested path.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is json).

## Source

Source: Papra server behaviour notes - SRV-681
