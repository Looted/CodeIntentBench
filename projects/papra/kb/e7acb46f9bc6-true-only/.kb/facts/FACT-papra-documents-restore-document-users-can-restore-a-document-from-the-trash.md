---
title: documents.restore_document users_can_restore_a_document_from_the_trash = True
status: active
fact_kind: property_value
subject_key: documents.restore_document
property_key: users_can_restore_a_document_from_the_trash
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6C3D4F412C621789
claim_text: Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared
text_ref: REQ-papra-documents-users-can-restore-document-from-trash-document
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1207'
  recorded_at: '2026-09-02T08:02:34.000Z'
id: FACT-papra-documents-restore-document-users-can-restore-a-document-from-the-trash
type: fact
---
Users can restore a document from the trash, the document is no longer marked as deleted and the deletedBy and deletedAt fields are cleared.

Modeled from REQ-papra-documents-users-can-restore-document-from-trash-document so the claim can be checked for contradictions.
