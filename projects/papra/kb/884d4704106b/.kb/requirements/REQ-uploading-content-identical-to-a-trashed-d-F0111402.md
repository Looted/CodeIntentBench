---
title: Uploading content identical to a trashed document restores that document instead of creating a new copy, and its metadata is updated to match the new upload.
status: active
semantic_text: Uploading content identical to a trashed document restores that document instead of creating a new copy, and its metadata is updated to match the new upload.
logic_claims:
  - CLAIM-466B3F61C57AECCC
semantic_clauses:
  - Uploading content identical to a trashed document restores that document instead of creating a new copy, and its metadata is updated to match the new upload
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d6e9b2c2ac26ba0b30a7928a1f090b05df6e34a5d427ad2e47a7313b81105da2
semantic_inventory:
  - claim_key: CLAIM-466B3F61C57AECCC
    claim_text: Uploading content identical to a trashed document restores that document instead of creating a new copy, and its metadata is updated to match the new upload
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 156
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/document-deduplication.mdx#restore'
  recorded_at: '2026-10-14T12:07:37.226Z'
rationale: 'Maintainer on issue #142 (2025-04-11): the process needed to be automatic, prompting the user with what to do would not be possible in certain cases (intake emails, automated uploads through the public API, ingestion folders).'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:documents
id: REQ-uploading-content-identical-to-a-trashed-d-F0111402
type: req
---
Uploading content identical to a trashed document restores that document instead of creating a new copy, and its metadata is updated to match the new upload.

## Context

Maintainer on issue #142 (2025-04-11): the process needed to be automatic, prompting the user with what to do would not be possible in certain cases (intake emails, automated uploads through the public API, ingestion folders).

## Source

> If a document **with same content was previously deleted** (in trash), it is restored instead of creating a new copy, the metadata is updated to match the newly added document

Source: Papra documentation site (apps/docs) - 05-architecture/document-deduplication.mdx#restore
