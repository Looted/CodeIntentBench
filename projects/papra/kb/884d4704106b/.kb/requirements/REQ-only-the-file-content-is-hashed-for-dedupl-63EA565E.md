---
title: Only the file content is hashed for deduplication; file names, upload dates and metadata never affect whether two documents are duplicates.
status: active
semantic_text: Only the file content is hashed for deduplication; file names, upload dates and metadata never affect whether two documents are duplicates.
logic_claims:
  - CLAIM-14FFBD396EF0CC0F
  - CLAIM-4A96F0E06C9758D3
semantic_clauses:
  - Only the file content is hashed for deduplication
  - file names, upload dates and metadata never affect whether two documents are duplicates
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 15ec4bbc2df921a2959e9b0be642ee471b4acaf30fecc8773293c18c1d8a6cdb
semantic_inventory:
  - claim_key: CLAIM-14FFBD396EF0CC0F
    claim_text: Only the file content is hashed for deduplication
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 49
  - claim_key: CLAIM-4A96F0E06C9758D3
    claim_text: file names, upload dates and metadata never affect whether two documents are duplicates
    role: descriptive
    status: ontology_gap
    span:
      start: 51
      end: 138
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/document-deduplication.mdx#content-only'
  recorded_at: '2026-10-14T12:07:41.889Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:documents
id: REQ-only-the-file-content-is-hashed-for-dedupl-63EA565E
type: req
---
Only the file content is hashed for deduplication; file names, upload dates and metadata never affect whether two documents are duplicates.

## Context

Reason not stated.

## Source

> Only the **file content** is hashed and used for deduplication, filenames, upload dates, and metadata don't affect deduplication.

Source: Papra documentation site (apps/docs) - 05-architecture/document-deduplication.mdx#content-only
