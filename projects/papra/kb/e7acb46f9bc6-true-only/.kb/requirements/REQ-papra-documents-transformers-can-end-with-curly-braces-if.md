---
title: Transformers can end with curly braces if they have arguments.
status: active
semantic_text: Transformers can end with curly braces if they have arguments.
semantic_clauses:
  - Transformers can end with curly braces if they have arguments
logic_claims:
  - CLAIM-B71BCD2FE707DBA4
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7ce2f13e0b1a5ef01312855198e658db5de59a617e9e8f07d413d8c1792269f7
semantic_inventory:
  - claim_key: CLAIM-B71BCD2FE707DBA4
    claim_text: Transformers can end with curly braces if they have arguments
    role: normative
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1392'
  recorded_at: '2026-07-01T17:56:49.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-transformers-can-end-with-curly-braces-if
type: req
---
Transformers can end with curly braces if they have arguments.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey > given a storage key pattern, returns a function that can interpolate it with a context).

## Source

Source: Papra server behaviour notes - SRV-1392
