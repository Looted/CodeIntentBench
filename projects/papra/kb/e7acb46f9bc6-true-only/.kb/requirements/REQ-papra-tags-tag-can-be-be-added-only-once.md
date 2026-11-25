---
title: A tag can be be added only once to a document.
status: active
semantic_text: A tag can be be added only once to a document.
semantic_clauses:
  - A tag can be be added only once to a document
logic_claims:
  - CLAIM-5ABA74710745D8F3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 73fa1be1df36577e974afb8567c87154f148c02771a4680713df9c32b46a7484
semantic_inventory:
  - claim_key: CLAIM-5ABA74710745D8F3
    claim_text: A tag can be be added only once to a document
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 45
    subjects:
      - tags.add_tag_to_document
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1827'
  recorded_at: '2025-07-20T15:21:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-tag-can-be-be-added-only-once
type: req
---
A tag can be be added only once to a document.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > addTagToDocument).

## Source

Source: Papra server behaviour notes - SRV-1827
