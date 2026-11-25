---
title: When the response format is json, a non-object response throws.
status: active
semantic_text: When the response format is json, a non-object response throws.
semantic_clauses:
  - When the response format is json, a non-object response throws
logic_claims:
  - CLAIM-CB323592B2144D2F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 02b6e658fde00fa6b3bbfc72cb9adf5586d4d5d5d0bc05c82b2e4fba0d7b0632
semantic_inventory:
  - claim_key: CLAIM-CB323592B2144D2F
    claim_text: When the response format is json, a non-object response throws
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
  ref: 'Papra server behaviour notes: SRV-674'
  recorded_at: '2026-04-13T08:28:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-non-object-response-throws
type: req
---
When the response format is json, a non-object response throws.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is json).

## Source

Source: Papra server behaviour notes - SRV-674
