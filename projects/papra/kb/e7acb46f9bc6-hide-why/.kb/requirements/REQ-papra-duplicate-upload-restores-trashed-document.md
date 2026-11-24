---
title: Within an organization a file with identical content is stored only once.
status: active
semantic_text: Within an organization a file with identical content is stored only once. Uploading a duplicate of a live document is rejected with a conflict, while uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record.
semantic_clauses:
  - Within an organization a file with identical content is stored only once
  - Uploading a duplicate of a live document is rejected with a conflict
  - uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record
logic_claims:
  - CLAIM-D2A66A4236D7AF28
  - CLAIM-CC56B0783B91CEFF
  - CLAIM-BE9EE0F2DADDCB25
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3e6715502f6885f24767c8bed2d24914bb598b8e005df4036f8c0c3b104bcaf8
semantic_inventory:
  - claim_key: CLAIM-D2A66A4236D7AF28
    claim_text: Within an organization a file with identical content is stored only once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - document.deduplication
  - claim_key: CLAIM-CC56B0783B91CEFF
    claim_text: Uploading a duplicate of a live document is rejected with a conflict
    role: normative
    status: modeled
    span:
      start: 74
      end: 142
    subjects:
      - document.deduplication
  - claim_key: CLAIM-BE9EE0F2DADDCB25
    claim_text: uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record
    role: descriptive
    status: modeled
    span:
      start: 150
      end: 336
    subjects:
      - document.trash_restore
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#duplicate-upload-restores-trashed-document'
  recorded_at: '2026-11-16T13:15:41.306Z'
tags:
  - bootstrap
  - knowledge-source:papra-tests
  - component:documents
  - rule:duplicate-upload-restores-trashed-document
rationale: 'The deduplication docs: only one copy is stored, "saving storage space and reducing clutter". Maintainer CorentinTh on issue #142 (2025-04-11) on why the restore is automatic: prompting the user would not be possible for intake emails, automated uploads through the public API and ingestion folders.'
id: REQ-papra-duplicate-upload-restores-trashed-document
type: req
---
Within an organization a file with identical content is stored only once. Uploading a duplicate of a live document is rejected with a conflict, while uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record.

## Context

The deduplication docs: only one copy is stored, "saving storage space and reducing clutter". Maintainer CorentinTh on issue #142 (2025-04-11) on why the restore is automatic: prompting the user would not be possible for intake emails, automated uploads through the public API and ingestion folders.

## Source

> in the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists
> when restoring a deleted document via duplicate upload, the optimistically saved new file should be cleaned up to prevent orphan files
> a document is unique by organization, an error is raised if a document with the same hash already exists

Source: Papra server test suite (apps/papra-server/src/modules) - documents/documents.usecases.test.ts#duplicate-upload-restores-trashed-document
