---
title: When searching by partial name, matching users are returned.
status: active
semantic_text: When searching by partial name, matching users are returned.
semantic_clauses:
  - When searching by partial name, matching users are returned
logic_claims:
  - CLAIM-78BBF9A64F4DF865
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ed711842153f6958507b2e6f87a09d505c6d54090710ab7daaf2aeab5aee8c24
semantic_inventory:
  - claim_key: CLAIM-78BBF9A64F4DF865
    claim_text: When searching by partial name, matching users are returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - users.list_users
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1867'
  recorded_at: '2025-12-11T14:08:58.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-searching-by-partial-name-matching-users-are
type: req
---
When searching by partial name, matching users are returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > listUsers).

## Source

Source: Papra server behaviour notes - SRV-1867
