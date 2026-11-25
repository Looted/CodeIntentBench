---
title: documents.sort tie_break_field = createdAt
status: active
fact_kind: property_value
subject_key: documents.sort
property_key: tie_break_field
operator: eq
value_type: string
value_string: createdAt
claim_key: CLAIM-47A4DA35EDEED4CD
claim_text: Documents that tie on the chosen sort field are ordered by their importation (creation) date
text_ref: REQ-papra-document-sort-falls-back-to-import-date
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1292: Document sort order fallback to the importation date when th'
  recorded_at: '2026-11-16T10:21:02.121Z'
id: FACT-papra-documents-sort-tie-break-field
type: fact
---
Documents that tie on the chosen sort field are ordered by their importation (creation) date.

Modeled from REQ-papra-document-sort-falls-back-to-import-date so the claim can be checked for contradictions.
