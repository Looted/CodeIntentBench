---
title: Given an organization, tags can be created, retrieved, updated, and deleted.
status: active
semantic_text: Given an organization, tags can be created, retrieved, updated, and deleted.
semantic_clauses:
  - Given an organization, tags can be created, retrieved, updated, and deleted
logic_claims:
  - CLAIM-A6B2881F1609AE34
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6166db1b968fb86d0b10fd21ff84c0abe585931977461bb903903e1b2d4e363d
semantic_inventory:
  - claim_key: CLAIM-A6B2881F1609AE34
    claim_text: Given an organization, tags can be created, retrieved, updated, and deleted
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - tags.tags_repository
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1831'
  recorded_at: '2025-10-28T09:35:01.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-organization-tags-can-be-created-retrieved-updated
type: req
---
Given an organization, tags can be created, retrieved, updated, and deleted.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.repository.test.ts (tags repository > crud operations on tags collection).

## Source

Source: Papra server behaviour notes - SRV-1831
