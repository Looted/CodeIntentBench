---
title: storage_pattern.document_date value_when_missing = no-date
status: active
fact_kind: property_value
subject_key: storage_pattern.document_date
property_key: value_when_missing
operator: eq
value_type: string
value_string: no-date
claim_key: CLAIM-0624C08B18E10BC5
claim_text: documents without a date use no-date, which the default transformer can change
text_ref: REQ-papra-storage-pattern-document-date
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1528: Added `document.date` and `document.createdAt` to storage ke'
  recorded_at: '2026-11-16T10:19:59.585Z'
id: FACT-papra-storage-pattern-document-date-value-when-missing
type: fact
---
Documents without a date use no-date, which the default transformer can change.

Modeled from REQ-papra-storage-pattern-document-date so the claim can be checked for contradictions.
