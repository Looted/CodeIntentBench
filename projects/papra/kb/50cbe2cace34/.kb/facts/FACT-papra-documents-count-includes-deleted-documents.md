---
title: documents.count includes_deleted_documents = False
status: active
fact_kind: property_value
subject_key: documents.count
property_key: includes_deleted_documents
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-041D1BCC0B7097AE
claim_text: Deleted documents are excluded from an organization's document count
text_ref: REQ-papra-document-count-excludes-deleted
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.4.0 changelog, #280: Excluded deleted documents from doc count'
  recorded_at: '2026-11-16T10:31:08.325Z'
id: FACT-papra-documents-count-includes-deleted-documents
type: fact
---
Deleted documents are excluded from an organization's document count.

Modeled from REQ-papra-document-count-excludes-deleted so the claim can be checked for contradictions.
