---
title: 'Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs; a user retrieves exactly…'
status: active
semantic_text: 'Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs; a user retrieves exactly what was uploaded.'
logic_claims:
  - CLAIM-6C79E522E8919EC7
  - CLAIM-7A1439A855E9305D
semantic_clauses:
  - 'Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs'
  - a user retrieves exactly what was uploaded
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d8e619068de78044f577287bba7084aa2fb003ebedd2d2eb445d61ca2ad8b4fd
semantic_inventory:
  - claim_key: CLAIM-6C79E522E8919EC7
    claim_text: 'Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs'
    role: descriptive
    status: ontology_gap
    span:
      start: 0
      end: 131
  - claim_key: CLAIM-7A1439A855E9305D
    claim_text: a user retrieves exactly what was uploaded
    role: descriptive
    status: ontology_gap
    span:
      start: 133
      end: 175
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 05-architecture/no-mutation-principle.mdx'
  recorded_at: '2026-10-14T12:07:44.015Z'
rationale: When archiving important documents, users need absolute confidence that their files remain untouched. Whether it's a legal document, a medical record, or a personal photo, the original should be sacrosanct. This approach eliminates the mental overhead of wondering "what happened to my file?"
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:documents
id: REQ-documents-are-never-mutated-after-upload-n-409E8212
type: req
---
Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs; a user retrieves exactly what was uploaded.

## Context

When archiving important documents, users need absolute confidence that their files remain untouched. Whether it's a legal document, a medical record, or a personal photo, the original should be sacrosanct. This approach eliminates the mental overhead of wondering "what happened to my file?"

## Source

> Papra follows a fundamental principle: **documents are never mutated after upload**. When you input a document, you can always retrieve it exactly as it was uploaded.

Source: Papra documentation site (apps/docs) - 05-architecture/no-mutation-principle.mdx
