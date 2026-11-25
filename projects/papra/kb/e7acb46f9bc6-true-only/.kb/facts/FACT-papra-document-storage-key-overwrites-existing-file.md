---
title: document.storage_key overwrites_existing_file = False
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: overwrites_existing_file
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-4AF6B5BC4A7FA0F8
claim_text: existing files are never overwritten
text_ref: REQ-when-a-generated-storage-key-collides-with-D635AF56
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #440'
  recorded_at: '2026-11-15T21:46:42.200Z'
id: FACT-papra-document-storage-key-overwrites-existing-file
type: fact
---
Existing files are never overwritten.

Modeled from REQ-when-a-generated-storage-key-collides-with-D635AF56 so the claim can be checked for contradictions.
