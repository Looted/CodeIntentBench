---
title: document.storage_key_sync triggered_by = document_name_or_document_date_change
status: active
fact_kind: property_value
subject_key: document.storage_key_sync
property_key: triggered_by
operator: eq
value_type: string
value_string: document_name_or_document_date_change
claim_key: CLAIM-CA7158CF32B244E3
claim_text: when it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key
text_ref: REQ-papra-storage-key-sync-on-document-update
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1525'
  recorded_at: '2026-11-16T10:17:47.760Z'
id: FACT-papra-document-storage-key-sync-triggered-by
type: fact
---
When it is enabled, a change of a document's name or document date re-evaluates the pattern and moves the stored file to the new key.

Modeled from REQ-papra-storage-key-sync-on-document-update so the claim can be checked for contradictions.
