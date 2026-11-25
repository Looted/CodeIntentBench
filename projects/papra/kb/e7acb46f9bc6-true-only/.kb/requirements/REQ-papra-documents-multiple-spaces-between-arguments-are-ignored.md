---
title: Multiple spaces between arguments are ignored.
status: active
semantic_text: Multiple spaces between arguments are ignored.
semantic_clauses:
  - Multiple spaces between arguments are ignored
logic_claims:
  - CLAIM-FDD1C64D12545818
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 96767c6b5d983482c46f0afb31f87c469cec10076b74c941eb776942bd80c8e1
semantic_inventory:
  - claim_key: CLAIM-FDD1C64D12545818
    claim_text: Multiple spaces between arguments are ignored
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - documents.tokenize_string_arguments
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1323'
  recorded_at: '2025-07-09T16:49:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-multiple-spaces-between-arguments-are-ignored
type: req
---
Multiple spaces between arguments are ignored.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > tokenizeStringArguments).

## Source

Source: Papra server behaviour notes - SRV-1323
