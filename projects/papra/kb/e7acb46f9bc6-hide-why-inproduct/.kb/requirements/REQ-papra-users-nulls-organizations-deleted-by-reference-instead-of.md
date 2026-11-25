---
title: Nulls the organizations.deleted_by reference instead of blocking the delete.
status: active
semantic_text: Nulls the organizations.deleted_by reference instead of blocking the delete.
semantic_clauses:
  - Nulls the organizations.deleted_by reference instead of blocking the delete
logic_claims:
  - CLAIM-0746B8637A0EDC0E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: aa79df7038d64e1d201c4be4e9de28a47d94503013c463c775bfddd672502f71
semantic_inventory:
  - claim_key: CLAIM-0746B8637A0EDC0E
    claim_text: Nulls the organizations.deleted_by reference instead of blocking the delete
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 75
    subjects:
      - users.delete_user
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1872'
  recorded_at: '2025-03-11T08:38:24.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-nulls-organizations-deleted-by-reference-instead-of
type: req
---
Nulls the organizations.deleted_by reference instead of blocking the delete.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.usecases.test.ts (users usecases > deleteUser).

## Source

Source: Papra server behaviour notes - SRV-1872
