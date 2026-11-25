---
title: document.storage_key existing_documents_keep_path_on_pattern_change = True
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: existing_documents_keep_path_on_pattern_change
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-71B9B732D8FE2F5A
claim_text: existing documents keep their old paths when the pattern changes
text_ref: REQ-when-a-generated-storage-key-collides-with-D635AF56
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #440'
  recorded_at: '2026-11-15T21:46:42.818Z'
id: FACT-papra-document-storage-key-existing-documents-keep-path-on-pattern-change
type: fact
---
Existing documents keep their old paths when the pattern changes.

Modeled from REQ-when-a-generated-storage-key-collides-with-D635AF56 so the claim can be checked for contradictions.
