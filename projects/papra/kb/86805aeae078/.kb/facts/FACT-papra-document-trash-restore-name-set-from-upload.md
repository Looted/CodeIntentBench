---
title: document.trash_restore name_set_from_upload = True
status: active
fact_kind: property_value
subject_key: document.trash_restore
property_key: name_set_from_upload
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4EF4915BDB8ED888
claim_text: When a trashed document is restored by a duplicate upload, its name is set to the new file's name
text_ref: REQ-when-a-trashed-document-is-restored-by-a-d-F5E2FEA1
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra GitHub issues: #142'
  recorded_at: '2026-11-15T21:51:31.605Z'
id: FACT-papra-document-trash-restore-name-set-from-upload
type: fact
---
When a trashed document is restored by a duplicate upload, its name is set to the new file's name.

Modeled from REQ-when-a-trashed-document-is-restored-by-a-d-F5E2FEA1 so the claim can be checked for contradictions.
