---
title: tags.delete_response missing_tag_status_code = 404
status: active
fact_kind: property_value
subject_key: tags.delete_response
property_key: missing_tag_status_code
operator: eq
value_type: int
value_int: 404
claim_key: CLAIM-11A36F13231E35CB
claim_text: deleting a tag that does not exist in the organization returns 404
text_ref: REQ-papra-tag-delete-returns-204
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1080: Tag deletion endpoint now returns a `204 No Content` status'
  recorded_at: '2026-11-16T10:32:48.107Z'
id: FACT-papra-tags-delete-response-missing-tag-status-code
type: fact
---
Deleting a tag that does not exist in the organization returns 404.

Modeled from REQ-papra-tag-delete-returns-204 so the claim can be checked for contradictions.
