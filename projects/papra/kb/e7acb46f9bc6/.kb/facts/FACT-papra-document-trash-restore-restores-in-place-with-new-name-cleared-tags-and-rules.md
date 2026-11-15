---
title: document.trash_restore restores_in_place_with_new_name_cleared_tags_and_rules = True
status: active
fact_kind: property_value
subject_key: document.trash_restore
property_key: restores_in_place_with_new_name_cleared_tags_and_rules
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BE9EE0F2DADDCB25
claim_text: uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record
text_ref: REQ-papra-duplicate-upload-restores-trashed-document
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#duplicate-upload-restores-trashed-document'
  recorded_at: '2026-11-15T22:57:39.647Z'
id: FACT-papra-document-trash-restore-restores-in-place-with-new-name-cleared-tags-and-rules
type: fact
---
Uploading a duplicate of a document that sits in the trash restores that document in place (new name, previous tags cleared, tagging rules re-applied) instead of creating a second record.

Modeled from REQ-papra-duplicate-upload-restores-trashed-document so the claim can be checked for contradictions.
