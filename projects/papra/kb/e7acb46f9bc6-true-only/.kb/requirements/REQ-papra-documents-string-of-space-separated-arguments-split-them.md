---
title: Given a string of space-separated arguments, split them into an array.
status: active
semantic_text: Given a string of space-separated arguments, split them into an array.
semantic_clauses:
  - Given a string of space-separated arguments, split them into an array
logic_claims:
  - CLAIM-D0ECA083B1A6F129
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1dd8f7451932dd16e5d157e4d02324760f90deef182dc95d4ba94f4ef951678d
semantic_inventory:
  - claim_key: CLAIM-D0ECA083B1A6F129
    claim_text: Given a string of space-separated arguments, split them into an array
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - documents.tokenize_string_arguments
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1320'
  recorded_at: '2025-12-16T09:28:11.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-string-of-space-separated-arguments-split-them
type: req
---
Given a string of space-separated arguments, split them into an array.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > tokenizeStringArguments).

## Source

Source: Papra server behaviour notes - SRV-1320
