---
title: tags.delete_response status_code = 204
status: active
fact_kind: property_value
subject_key: tags.delete_response
property_key: status_code
operator: eq
value_type: int
value_int: 204
claim_key: CLAIM-2E2603A3BB0905D6
claim_text: Deleting a tag returns 204 No Content
text_ref: REQ-papra-tag-delete-returns-204
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1080: Tag deletion endpoint now returns a `204 No Content` status'
  recorded_at: '2026-11-16T10:32:47.423Z'
id: FACT-papra-tags-delete-response-status-code
type: fact
---
Deleting a tag returns 204 No Content.

Modeled from REQ-papra-tag-delete-returns-204 so the claim can be checked for contradictions.
