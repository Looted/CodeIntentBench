---
title: When updating a tag to a name that already exists for the same organization, it throws an error.
status: active
semantic_text: When updating a tag to a name that already exists for the same organization, it throws an error.
semantic_clauses:
  - When updating a tag to a name that already exists for the same organization, it throws an error
logic_claims:
  - CLAIM-57A963E0B2765B52
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7f2194b3f92d3fc5243c9991501936a0caf19eabb3b1d60107ec8f1bddd7eb09
semantic_inventory:
  - claim_key: CLAIM-57A963E0B2765B52
    claim_text: When updating a tag to a name that already exists for the same organization, it throws an error
    role: condition
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - tags.update_tag
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1842'
  recorded_at: '2025-03-11T12:41:33.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-updating-tag-to-name-that-already-exists
type: req
---
When updating a tag to a name that already exists for the same organization, it throws an error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > updateTag).

## Source

Source: Papra server behaviour notes - SRV-1842
