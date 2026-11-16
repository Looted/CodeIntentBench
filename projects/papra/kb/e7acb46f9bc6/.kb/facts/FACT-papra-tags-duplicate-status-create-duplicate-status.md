---
title: tags.duplicate_status create_duplicate_status = 409
status: active
fact_kind: property_value
subject_key: tags.duplicate_status
property_key: create_duplicate_status
operator: eq
value_type: int
value_int: 409
claim_key: CLAIM-935D25C7D1DA7BF9
claim_text: Creating a tag that already exists returns 409, not 400
text_ref: REQ-papra-tag-duplicates-return-409
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #992: Api now returns a 409 status code instead of a 400 when eith'
  recorded_at: '2026-11-16T10:21:35.521Z'
id: FACT-papra-tags-duplicate-status-create-duplicate-status
type: fact
---
Creating a tag that already exists returns 409, not 400.

Modeled from REQ-papra-tag-duplicates-return-409 so the claim can be checked for contradictions.
