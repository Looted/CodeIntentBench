---
title: Patterns without an organization name expression need no organization lookup.
status: active
semantic_text: Patterns without an organization name expression need no organization lookup.
semantic_clauses:
  - Patterns without an organization name expression need no organization lookup
logic_claims:
  - CLAIM-A68A3D18538736FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ebb8f117e31c9909f8b586b5c59e4905f790c9ee0eb23b0aaa9d2a33e4f35d81
semantic_inventory:
  - claim_key: CLAIM-A68A3D18538736FF
    claim_text: Patterns without an organization name expression need no organization lookup
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - documents.resolve_storage_pattern_context
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1382'
  recorded_at: '2025-05-27T13:20:14.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-patterns-without-organization-name-expression-need-no
type: req
---
Patterns without an organization name expression need no organization lookup.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > resolveStoragePatternContext).

## Source

Source: Papra server behaviour notes - SRV-1382
