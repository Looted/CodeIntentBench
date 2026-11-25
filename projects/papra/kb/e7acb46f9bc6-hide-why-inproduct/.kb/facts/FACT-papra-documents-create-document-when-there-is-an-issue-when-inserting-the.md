---
title: documents.create_document when_there_is_an_issue_when_inserting_the = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: when_there_is_an_issue_when_inserting_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A72919CF5CF8DF43
claim_text: When there is an issue when inserting the document in the db, the file should not be saved in the storage
text_ref: REQ-papra-documents-there-is-issue-when-inserting-document-in
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1226'
  recorded_at: '2025-12-13T10:51:12.000Z'
id: FACT-papra-documents-create-document-when-there-is-an-issue-when-inserting-the
type: fact
---
When there is an issue when inserting the document in the db, the file should not be saved in the storage.

Modeled from REQ-papra-documents-there-is-issue-when-inserting-document-in so the claim can be checked for contradictions.
