---
title: documents.document_date separate_from_created_at = True
status: active
fact_kind: property_value
subject_key: documents.document_date
property_key: separate_from_created_at
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1B9EB4A036FB8C64
claim_text: Documents have a document date property, separate from their creation date
text_ref: REQ-papra-document-date-property
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #943: Add the document date property.'
  recorded_at: '2026-11-25T19:27:36.169Z'
id: FACT-papra-documents-document-date-separate-from-created-at
type: fact
---
Documents have a document date property, separate from their creation date.

Modeled from REQ-papra-document-date-property so the claim can be checked for contradictions.
