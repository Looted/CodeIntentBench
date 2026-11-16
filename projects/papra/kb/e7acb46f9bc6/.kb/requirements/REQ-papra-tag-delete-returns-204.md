---
title: Deleting a tag returns 204 No Content; deleting a tag that does not exist in the organization returns 404.
status: active
semantic_text: Deleting a tag returns 204 No Content; deleting a tag that does not exist in the organization returns 404.
semantic_clauses:
  - Deleting a tag returns 204 No Content
  - deleting a tag that does not exist in the organization returns 404
logic_claims:
  - CLAIM-2E2603A3BB0905D6
  - CLAIM-11A36F13231E35CB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 890d7ea5661221aa6a7e074581b8dfe61842d15dd9c3fe01db54f4d637fe9395
semantic_inventory:
  - claim_key: CLAIM-2E2603A3BB0905D6
    claim_text: Deleting a tag returns 204 No Content
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 37
    subjects:
      - tags.delete_response
  - claim_key: CLAIM-11A36F13231E35CB
    claim_text: deleting a tag that does not exist in the organization returns 404
    role: descriptive
    status: modeled
    span:
      start: 39
      end: 105
    subjects:
      - tags.delete_response
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1080: Tag deletion endpoint now returns a `204 No Content` status'
  recorded_at: '2026-11-16T10:21:50.991Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-tag-delete-returns-204
type: req
---
Deleting a tag returns 204 No Content; deleting a tag that does not exist in the organization returns 404.

## Context

Reason not stated.

## Source

> Tag deletion endpoint now returns a `204 No Content` status code instead of `200 OK` with an empty JSON object, and a `404 Not Found` status code is returned when trying to delete a tag that does not exists for the organization.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1080: Tag deletion endpoint now returns a `204 No Content` status
