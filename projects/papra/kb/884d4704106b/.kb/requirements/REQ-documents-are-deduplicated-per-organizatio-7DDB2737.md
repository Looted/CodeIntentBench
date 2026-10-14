---
title: 'Documents are deduplicated per organization by the SHA-256 hash of their content: uploading content that already exists in the organization is rejected.'
status: active
semantic_text: 'Documents are deduplicated per organization by the SHA-256 hash of their content: uploading content that already exists in the organization is rejected.'
logic_claims:
  - CLAIM-73B1ECA2FA73884E
semantic_clauses:
  - 'Documents are deduplicated per organization by the SHA-256 hash of their content: uploading content that already exists in the organization is rejected'
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4d0c8abaa27f7806688accc0e25712e6ff3bd1d685df9d01cdabbebb4b8c7151
semantic_inventory:
  - claim_key: CLAIM-73B1ECA2FA73884E
    claim_text: 'Documents are deduplicated per organization by the SHA-256 hash of their content: uploading content that already exists in the organization is rejected'
    role: normative
    status: ontology_gap
    span:
      start: 0
      end: 151
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/document-deduplication.mdx'
  recorded_at: '2026-10-14T12:07:35.006Z'
rationale: Papra automatically detects and prevents duplicate documents per organization using content hashing. This ensures that if the same file is uploaded multiple times, only one copy is stored, saving storage space and reducing clutter.
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:documents
id: REQ-documents-are-deduplicated-per-organizatio-7DDB2737
type: req
---
Documents are deduplicated per organization by the SHA-256 hash of their content: uploading content that already exists in the organization is rejected.

## Context

Papra automatically detects and prevents duplicate documents per organization using content hashing. This ensures that if the same file is uploaded multiple times, only one copy is stored, saving storage space and reducing clutter.

## Source

> If a document **with same content exists**, the upload is rejected

Source: Papra documentation site (apps/docs) - 05-architecture/document-deduplication.mdx
