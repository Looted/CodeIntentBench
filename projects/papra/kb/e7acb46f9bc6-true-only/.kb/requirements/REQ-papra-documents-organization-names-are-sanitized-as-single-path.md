---
title: Organization names are sanitized as a single path component before transformers.
status: active
semantic_text: Organization names are sanitized as a single path component before transformers.
semantic_clauses:
  - Organization names are sanitized as a single path component before transformers
logic_claims:
  - CLAIM-EDD8AE695DF0B1B1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9c0f12d1c689e7cf5d9133e23e8aa225243f74c6c525410e745e8bbf3654293f
semantic_inventory:
  - claim_key: CLAIM-EDD8AE695DF0B1B1
    claim_text: Organization names are sanitized as a single path component before transformers
    role: normative
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1377'
  recorded_at: '2025-11-03T10:11:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-organization-names-are-sanitized-as-single-path
type: req
---
Organization names are sanitized as a single path component before transformers.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1377
