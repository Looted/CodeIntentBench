---
title: document.storage_key default_key_basis = document_id
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: default_key_basis
operator: eq
value_type: string
value_string: document_id
claim_key: CLAIM-D25F0B2A70217FF7
claim_text: Stored files are keyed by document id, not by the document's file name
text_ref: REQ-stored-files-are-keyed-by-document-id-not--DCCF2C2E
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #352'
  recorded_at: '2026-11-15T21:50:57.436Z'
id: FACT-papra-document-storage-key-default-key-basis
type: fact
---
Stored files are keyed by document id, not by the document's file name.

Modeled from REQ-stored-files-are-keyed-by-document-id-not--DCCF2C2E so the claim can be checked for contradictions.
