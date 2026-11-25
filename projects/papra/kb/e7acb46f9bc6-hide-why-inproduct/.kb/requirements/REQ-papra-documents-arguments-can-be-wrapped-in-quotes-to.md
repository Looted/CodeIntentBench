---
title: Arguments can be wrapped in quotes to include spaces.
status: active
semantic_text: Arguments can be wrapped in quotes to include spaces.
semantic_clauses:
  - Arguments can be wrapped in quotes to include spaces
logic_claims:
  - CLAIM-3CCC128C16D51C78
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29bc3e01ce3f3411efca9ec8dd75bf05ca374cc7fff984ed77c8c1ff961d234f
semantic_inventory:
  - claim_key: CLAIM-3CCC128C16D51C78
    claim_text: Arguments can be wrapped in quotes to include spaces
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - documents.tokenize_string_arguments
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1298'
  recorded_at: '2026-06-25T11:26:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-arguments-can-be-wrapped-in-quotes-to
type: req
---
Arguments can be wrapped in quotes to include spaces.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > tokenizeStringArguments).

## Source

Source: Papra server behaviour notes - SRV-1298
