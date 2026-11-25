---
title: tags.duplicate_status add_existing_tag_status = 409
status: active
fact_kind: property_value
subject_key: tags.duplicate_status
property_key: add_existing_tag_status
operator: eq
value_type: int
value_int: 409
claim_key: CLAIM-27D77E37B3340AF3
claim_text: adding a tag to a document that already has it returns 409 with a document-already-has-tag error
text_ref: REQ-papra-tag-duplicates-return-409
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #992: Api now returns a 409 status code instead of a 400 when eith'
  recorded_at: '2026-11-16T13:18:39.453Z'
id: FACT-papra-tags-duplicate-status-add-existing-tag-status
type: fact
---
Adding a tag to a document that already has it returns 409 with a document-already-has-tag error.

Modeled from REQ-papra-tag-duplicates-return-409 so the claim can be checked for contradictions.
