---
title: Organization name expressions with transformers are valid without a database.
status: active
semantic_text: Organization name expressions with transformers are valid without a database.
semantic_clauses:
  - Organization name expressions with transformers are valid without a database
logic_claims:
  - CLAIM-3780FF6F55700AA9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a79131ac26263be8dd483c7be6354f27de250cecfbaca3d174a0f24e3fccbf40
semantic_inventory:
  - claim_key: CLAIM-3780FF6F55700AA9
    claim_text: Organization name expressions with transformers are valid without a database
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1376'
  recorded_at: '2026-09-17T10:49:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-organization-name-expressions-with-transformers-are-valid
type: req
---
Organization name expressions with transformers are valid without a database.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1376
