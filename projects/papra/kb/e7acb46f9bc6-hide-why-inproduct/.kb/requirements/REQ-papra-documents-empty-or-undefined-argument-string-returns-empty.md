---
title: Empty or undefined argument string returns an empty array.
status: active
semantic_text: Empty or undefined argument string returns an empty array.
semantic_clauses:
  - Empty or undefined argument string returns an empty array
logic_claims:
  - CLAIM-A4A831FBCD49903D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 39b36f6bb58884f8fb8c4c2ec13acc8cf54053c9ba125c4d82580cf02d57494d
semantic_inventory:
  - claim_key: CLAIM-A4A831FBCD49903D
    claim_text: Empty or undefined argument string returns an empty array
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - documents.tokenize_string_arguments
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1316'
  recorded_at: '2025-03-11T16:29:08.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-empty-or-undefined-argument-string-returns-empty
type: req
---
Empty or undefined argument string returns an empty array.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > tokenizeStringArguments).

## Source

Source: Papra server behaviour notes - SRV-1316
