---
title: document.storage_key collision_resolution = suffix_new_file
status: active
fact_kind: property_value
subject_key: document.storage_key
property_key: collision_resolution
operator: eq
value_type: string
value_string: suffix_new_file
claim_key: CLAIM-F8BC6C9CEA368CD7
claim_text: When a generated storage key collides with an existing file, the new file gets a suffix on its name
text_ref: REQ-when-a-generated-storage-key-collides-with-D635AF56
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #440'
  recorded_at: '2026-11-15T21:46:41.689Z'
id: FACT-papra-document-storage-key-collision-resolution
type: fact
---
When a generated storage key collides with an existing file, the new file gets a suffix on its name.

Modeled from REQ-when-a-generated-storage-key-collides-with-D635AF56 so the claim can be checked for contradictions.
