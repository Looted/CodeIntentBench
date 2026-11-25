---
title: When no users exist, an empty list is returned.
status: active
semantic_text: When no users exist, an empty list is returned.
semantic_clauses:
  - When no users exist, an empty list is returned
logic_claims:
  - CLAIM-8482ADE8D1C45E44
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5092dad0b3aa02cc4b2111b8ab6a0d9f0345c2c4daf124745d65533aae704d58
semantic_inventory:
  - claim_key: CLAIM-8482ADE8D1C45E44
    claim_text: When no users exist, an empty list is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 46
    subjects:
      - users.list_users
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1861'
  recorded_at: '2026-02-20T15:19:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-no-users-exist-empty-list-is-returned
type: req
---
When no users exist, an empty list is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > listUsers).

## Source

Source: Papra server behaviour notes - SRV-1861
