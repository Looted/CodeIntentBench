---
title: When the response format is json, a missing key along the path throws, naming the missing key.
status: active
semantic_text: When the response format is json, a missing key along the path throws, naming the missing key.
semantic_clauses:
  - When the response format is json, a missing key along the path throws, naming the missing key
logic_claims:
  - CLAIM-7DE57011BBBDF287
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f8ecf4056f2641b6bf2f63442eaf980be38cae9b04cc4a17b99f038fb5b3e73b
semantic_inventory:
  - claim_key: CLAIM-7DE57011BBBDF287
    claim_text: When the response format is json, a missing key along the path throws, naming the missing key
    role: condition
    status: modeled
    span:
      start: 0
      end: 93
    subjects:
      - documents.extract_text_from_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-672'
  recorded_at: '2025-07-07T11:03:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-missing-key-along-path-throws-naming-missing
type: req
---
When the response format is json, a missing key along the path throws, naming the missing key.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/content-extraction/content-extraction-strategies/custom-http/custom-http.content-extraction-strategy.models.test.ts (custom-http.content-extraction-strategy.models > extractTextFromResponse > when the response format is json).

## Source

Source: Papra server behaviour notes - SRV-672
