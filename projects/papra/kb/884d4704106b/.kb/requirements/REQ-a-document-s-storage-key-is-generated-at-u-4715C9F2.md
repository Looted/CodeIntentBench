---
title: A document's storage key is generated at upload time and persisted with the document; changing the pattern configuration never changes the storage key of an…
status: active
semantic_text: A document's storage key is generated at upload time and persisted with the document; changing the pattern configuration never changes the storage key of an existing document.
logic_claims:
  - CLAIM-0E5079ECE353734F
  - CLAIM-0BBEDCA31DDAAD31
semantic_clauses:
  - A document's storage key is generated at upload time and persisted with the document
  - changing the pattern configuration never changes the storage key of an existing document
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 49d96439cbd916a2253ba080b6fecc248db4ef54d8bf1897b72350cae612e6df
semantic_inventory:
  - claim_key: CLAIM-0E5079ECE353734F
    claim_text: A document's storage key is generated at upload time and persisted with the document
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 84
  - claim_key: CLAIM-0BBEDCA31DDAAD31
    claim_text: changing the pattern configuration never changes the storage key of an existing document
    role: descriptive
    status: ontology_gap
    span:
      start: 86
      end: 174
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 03-guides/09-storage-key-patterns.mdx#persistence'
  recorded_at: '2026-10-14T12:07:48.532Z'
rationale: Existing documents retain their original storage keys and continue to be served from their original location.
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:storage
id: REQ-a-document-s-storage-key-is-generated-at-u-4715C9F2
type: req
---
A document's storage key is generated at upload time and persisted with the document; changing the pattern configuration never changes the storage key of an existing document.

## Context

Existing documents retain their original storage keys and continue to be served from their original location.

## Source

> This means that **changing the pattern configuration does not affect existing documents**, only newly uploaded documents will use the updated pattern.

Source: Papra documentation site (apps/docs) - 03-guides/09-storage-key-patterns.mdx#persistence
