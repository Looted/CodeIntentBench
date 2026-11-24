---
title: storage_pattern.document_date available_as_expression = True
status: active
fact_kind: property_value
subject_key: storage_pattern.document_date
property_key: available_as_expression
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7DF263FA600F175B
claim_text: Storage key patterns support {{document.date}} and {{document.createdAt}}
text_ref: REQ-papra-storage-pattern-document-date
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.7.0 changelog, #1528: Added `document.date` and `document.createdAt` to storage ke'
  recorded_at: '2026-11-16T10:31:04.852Z'
id: FACT-papra-storage-pattern-document-date-available-as-expression
type: fact
---
Storage key patterns support {{document.date}} and {{document.createdAt}}.

Modeled from REQ-papra-storage-pattern-document-date so the claim can be checked for contradictions.
