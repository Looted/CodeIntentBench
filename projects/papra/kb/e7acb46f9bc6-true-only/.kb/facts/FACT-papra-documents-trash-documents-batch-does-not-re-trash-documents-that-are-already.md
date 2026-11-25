---
title: documents.trash_documents_batch does_not_re_trash_documents_that_are_already = True
status: active
fact_kind: property_value
subject_key: documents.trash_documents_batch
property_key: does_not_re_trash_documents_that_are_already
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-707E133863385386
claim_text: Does not re-trash documents that are already in the trash
text_ref: REQ-papra-documents-does-not-re-trash-documents-that-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1060'
  recorded_at: '2026-05-26T08:25:56.000Z'
id: FACT-papra-documents-trash-documents-batch-does-not-re-trash-documents-that-are-already
type: fact
---
Does not re-trash documents that are already in the trash.

Modeled from REQ-papra-documents-does-not-re-trash-documents-that-are so the claim can be checked for contradictions.
