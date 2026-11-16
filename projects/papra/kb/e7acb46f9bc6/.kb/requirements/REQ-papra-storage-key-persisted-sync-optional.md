---
title: A document's storage key is generated at upload time and persisted with the document; by default changing the pattern configuration only affects newly upload…
status: active
semantic_text: A document's storage key is generated at upload time and persisted with the document; by default changing the pattern configuration only affects newly uploaded documents, and existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated.
semantic_clauses:
  - A document's storage key is generated at upload time and persisted with the document
  - by default changing the pattern configuration only affects newly uploaded documents
  - existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated
logic_claims:
  - CLAIM-0E5079ECE353734F
  - CLAIM-28D1ABD510B375A3
  - CLAIM-FEA995DFDF1A70AB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af16bce2aa468d8e9163d067ed3b57afd190ac3f70ab8a7eb844c545c4e20ad0
semantic_inventory:
  - claim_key: CLAIM-0E5079ECE353734F
    claim_text: A document's storage key is generated at upload time and persisted with the document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - document.storage_key
  - claim_key: CLAIM-28D1ABD510B375A3
    claim_text: by default changing the pattern configuration only affects newly uploaded documents
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 169
    subjects:
      - document.storage_key
  - claim_key: CLAIM-FEA995DFDF1A70AB
    claim_text: existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated
    role: exception
    status: modeled
    span:
      start: 175
      end: 283
    subjects:
      - document.storage_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#storage-key-persistence'
  recorded_at: '2026-11-16T10:17:43.952Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:storage
rationale: 'The storage key docs: after a switch to patterns, existing documents "keep their legacy storage keys and remain accessible". Why leaving existing keys alone is the default: reason not stated beyond that.'
id: REQ-papra-storage-key-persisted-sync-optional
type: req
---
A document's storage key is generated at upload time and persisted with the document; by default changing the pattern configuration only affects newly uploaded documents, and existing documents keep their storage keys unless synchronization is enabled or they are explicitly migrated.

## Context

The storage key docs: after a switch to patterns, existing documents "keep their legacy storage keys and remain accessible". Why leaving existing keys alone is the default: reason not stated beyond that.

## Why this changed

PR #1525 (2026-09-18) added optional storage key synchronization and reworded this docs section in the same change. The March 2026 statement that a pattern change never changes the key of an existing document no longer holds once synchronization is enabled.

## Source

> By default, **changing the pattern configuration only affects newly uploaded documents**. Existing documents retain their original storage keys unless you enable synchronization or explicitly migrate them.

Source: Papra documentation site (apps/docs) - 03-guides/09-storage-key-patterns.mdx#storage-key-persistence
