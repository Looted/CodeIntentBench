---
title: Creating a tag that already exists returns 409, not 400; adding a tag to a document that already has it returns 409 with a document-already-has-tag error.
status: active
semantic_text: Creating a tag that already exists returns 409, not 400; adding a tag to a document that already has it returns 409 with a document-already-has-tag error.
semantic_clauses:
  - Creating a tag that already exists returns 409, not 400
  - adding a tag to a document that already has it returns 409 with a document-already-has-tag error
logic_claims:
  - CLAIM-935D25C7D1DA7BF9
  - CLAIM-27D77E37B3340AF3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7194ee20c74fb443b95e1c02293e1196587b99384288345d0cb048b2f85e5004
semantic_inventory:
  - claim_key: CLAIM-935D25C7D1DA7BF9
    claim_text: Creating a tag that already exists returns 409, not 400
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 55
    subjects:
      - tags.duplicate_status
  - claim_key: CLAIM-27D77E37B3340AF3
    claim_text: adding a tag to a document that already has it returns 409 with a document-already-has-tag error
    role: descriptive
    status: modeled
    span:
      start: 57
      end: 153
    subjects:
      - tags.duplicate_status
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #992: Api now returns a 409 status code instead of a 400 when eith'
  recorded_at: '2026-11-16T10:21:37.169Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-tag-duplicates-return-409
type: req
---
Creating a tag that already exists returns 409, not 400; adding a tag to a document that already has it returns 409 with a document-already-has-tag error.

## Context

Reason not stated.

## Source

> Api now returns a 409 status code instead of a 400 when either creating a tag that already exists or adding a tag to a document that already has it.
> Properly return a "document already has tag" error when trying to add a tag to a document that already has it, instead of a generic 500 error when using an hosted Turso db.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.0 changelog, #992: Api now returns a 409 status code instead of a 400 when eith
