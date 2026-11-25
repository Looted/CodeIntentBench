---
title: When the response format is json, the text is read from the top-level key when the path has a single segment.
status: active
semantic_text: When the response format is json, the text is read from the top-level key when the path has a single segment.
semantic_clauses:
  - When the response format is json, the text is read from the top-level key when the path has a single segment
logic_claims:
  - CLAIM-AD231896C5124CF6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 47a3546e57e7460e6e9ad9e195ed495d3867f05c42bddf9af363513b422f989f
semantic_inventory:
  - claim_key: CLAIM-AD231896C5124CF6
    claim_text: When the response format is json, the text is read from the top-level key when the path has a single segment
    role: condition
    status: modeled
    span:
      start: 0
      end: 108
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-684'
  recorded_at: '2025-07-06T09:16:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-text-is-read-from-top-level-key
type: req
---
When the response format is json, the text is read from the top-level key when the path has a single segment.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is json).

## Source

Source: Papra server behaviour notes - SRV-684
