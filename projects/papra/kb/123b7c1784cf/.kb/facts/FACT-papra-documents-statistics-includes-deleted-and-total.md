---
title: documents.statistics includes_deleted_and_total = True
status: active
fact_kind: property_value
subject_key: documents.statistics
property_key: includes_deleted_and_total
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70039BC9A70F1BB1
claim_text: The document statistics endpoint returns deleted and total document counts and sizes alongside the active ones
text_ref: REQ-papra-document-statistics-deleted-and-total
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.1 changelog, #556: Added deleted and total document counts and sizes in the `/a'
  recorded_at: '2026-11-25T19:27:19.711Z'
id: FACT-papra-documents-statistics-includes-deleted-and-total
type: fact
---
The document statistics endpoint returns deleted and total document counts and sizes alongside the active ones.

Modeled from REQ-papra-document-statistics-deleted-and-total so the claim can be checked for contradictions.
