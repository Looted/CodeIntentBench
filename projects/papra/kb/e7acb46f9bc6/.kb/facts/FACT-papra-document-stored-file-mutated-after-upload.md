---
title: document.stored_file mutated_after_upload = False
status: active
fact_kind: property_value
subject_key: document.stored_file
property_key: mutated_after_upload
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-6C79E522E8919EC7
claim_text: 'Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs'
text_ref: REQ-documents-are-never-mutated-after-upload-n-409E8212
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/no-mutation-principle.mdx'
  recorded_at: '2026-11-15T21:45:19.945Z'
id: FACT-papra-document-stored-file-mutated-after-upload
type: fact
---
Documents are never mutated after upload: no format conversion, no metadata injection into the file, no OCR overlay on scanned PDFs.

Modeled from REQ-documents-are-never-mutated-after-upload-n-409E8212 so the claim can be checked for contradictions.
