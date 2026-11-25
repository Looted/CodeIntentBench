---
title: OCR text extracted from scanned PDFs is used for search indexing only; the original PDF is not modified to embed the transcript.
status: active
semantic_text: OCR text extracted from scanned PDFs is used for search indexing only; the original PDF is not modified to embed the transcript.
logic_claims:
  - CLAIM-40C5EA436BC0140E
  - CLAIM-46ACA02EB1D82E39
semantic_clauses:
  - OCR text extracted from scanned PDFs is used for search indexing only
  - the original PDF is not modified to embed the transcript
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6503d9d26932e1f9f288718c4656590f32d148ef0bbe0df2c4a00f43221ab17c
semantic_inventory:
  - claim_key: CLAIM-40C5EA436BC0140E
    claim_text: OCR text extracted from scanned PDFs is used for search indexing only
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - ocr.transcript
  - claim_key: CLAIM-46ACA02EB1D82E39
    claim_text: the original PDF is not modified to embed the transcript
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 127
    subjects:
      - document.stored_file
firmness: firm
origin:
  kind: import
  ref: 'papra-hq/papra GitHub issues: #353'
  recorded_at: '2026-10-14T12:07:46.337Z'
tags:
  - bootstrap
  - knowledge-source:papra-issues
  - component:documents
id: REQ-ocr-text-extracted-from-scanned-pdfs-is-us-8C007452
type: req
required_evidence: asserted
rationale: 'Maintainer CorentinTh on issue #353 (2025-06-13): "As an archiving platform, Papra should guarantee document integrity", and "modifying the original document goes against that principle".'
---
OCR text extracted from scanned PDFs is used for search indexing only; the original PDF is not modified to embed the transcript.

## Context

Maintainer CorentinTh on issue #353 (2025-06-13): "As an archiving platform, Papra should guarantee document integrity", and "modifying the original document goes against that principle".

## Source

> modifying the original document goes against that principle.

Source: papra-hq/papra GitHub issues - #353
