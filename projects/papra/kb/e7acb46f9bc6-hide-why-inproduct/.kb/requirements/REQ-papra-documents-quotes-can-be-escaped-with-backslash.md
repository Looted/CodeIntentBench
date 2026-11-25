---
title: Quotes can be escaped with a backslash.
status: active
semantic_text: Quotes can be escaped with a backslash.
semantic_clauses:
  - Quotes can be escaped with a backslash
logic_claims:
  - CLAIM-FB9B346B3D722946
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c1fcbbb65461490ede0d4f0ec01208ce55895eb1f1370a1dedb1e74f60f38a77
semantic_inventory:
  - claim_key: CLAIM-FB9B346B3D722946
    claim_text: Quotes can be escaped with a backslash
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 38
    subjects:
      - documents.tokenize_string_arguments
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1326'
  recorded_at: '2026-06-28T16:40:36.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-quotes-can-be-escaped-with-backslash
type: req
---
Quotes can be escaped with a backslash.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.models.test.ts (storage-pattern models > tokenizeStringArguments).

## Source

Source: Papra server behaviour notes - SRV-1326
