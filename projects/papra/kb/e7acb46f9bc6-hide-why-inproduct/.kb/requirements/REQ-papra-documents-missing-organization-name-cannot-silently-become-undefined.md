---
title: A missing organization name cannot silently become an undefined path component.
status: active
semantic_text: A missing organization name cannot silently become an undefined path component.
semantic_clauses:
  - A missing organization name cannot silently become an undefined path component
logic_claims:
  - CLAIM-721C3AC426CF4BC6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cbd3b40dd246d3c3683ad65aa3f837adb921d6718ab06766697dd19a7697c2fc
semantic_inventory:
  - claim_key: CLAIM-721C3AC426CF4BC6
    claim_text: A missing organization name cannot silently become an undefined path component
    role: normative
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - documents.build_storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1350'
  recorded_at: '2025-09-16T17:41:57.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:documents
id: REQ-papra-documents-missing-organization-name-cannot-silently-become-undefined
type: req
---
A missing organization name cannot silently become an undefined path component.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/documents/storage-patterns/storage-pattern.usecases.test.ts (storage-pattern usecases > buildStorageKey).

## Source

Source: Papra server behaviour notes - SRV-1350
