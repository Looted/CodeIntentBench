---
title: When the response format is json, a non-string value at the end of the path throws.
status: active
semantic_text: When the response format is json, a non-string value at the end of the path throws.
semantic_clauses:
  - When the response format is json, a non-string value at the end of the path throws
logic_claims:
  - CLAIM-15D24BA623301FBD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 35da065b28601f21f23b662d40a3b315ff9177789cd081bb09c7c6cd9d5245c7
semantic_inventory:
  - claim_key: CLAIM-15D24BA623301FBD
    claim_text: When the response format is json, a non-string value at the end of the path throws
    role: condition
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-676'
  recorded_at: '2026-04-04T09:30:45.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-non-string-value-at-end-of-path
type: req
---
When the response format is json, a non-string value at the end of the path throws.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is json).

## Source

Source: Papra server behaviour notes - SRV-676
