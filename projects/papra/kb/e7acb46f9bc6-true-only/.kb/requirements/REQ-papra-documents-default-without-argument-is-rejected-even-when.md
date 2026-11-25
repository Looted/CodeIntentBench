---
title: A default without an argument is rejected even when the expression has a value.
status: active
semantic_text: A default without an argument is rejected even when the expression has a value.
semantic_clauses:
  - A default without an argument is rejected even when the expression has a value
logic_claims:
  - CLAIM-66F54B8E64FBEB0A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4ac96f2a9daf1c85553bfd1449b17df70adc682218cec1c7a40ce390560200a0
semantic_inventory:
  - claim_key: CLAIM-66F54B8E64FBEB0A
    claim_text: A default without an argument is rejected even when the expression has a value
    role: normative
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - documents.is_storage_pattern_valid
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1343'
  recorded_at: '2025-02-06T14:29:32.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-default-without-argument-is-rejected-even-when
type: req
---
A default without an argument is rejected even when the expression has a value.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > isStoragePatternValid).

## Source

Source: Papra server behaviour notes - SRV-1343
