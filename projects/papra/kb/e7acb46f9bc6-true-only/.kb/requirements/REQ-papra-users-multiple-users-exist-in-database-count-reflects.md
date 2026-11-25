---
title: When multiple users exist in the database, the count reflects the total number of users.
status: active
semantic_text: When multiple users exist in the database, the count reflects the total number of users.
semantic_clauses:
  - When multiple users exist in the database, the count reflects the total number of users
logic_claims:
  - CLAIM-256D562AC0237478
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 545afa0c8a5bad0e0701bd503777a500fc52cb8b9b8babbbf85c547818127e86
semantic_inventory:
  - claim_key: CLAIM-256D562AC0237478
    claim_text: When multiple users exist in the database, the count reflects the total number of users
    role: condition
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - users.get_user_count
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1853'
  recorded_at: '2025-03-14T10:41:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-multiple-users-exist-in-database-count-reflects
type: req
---
When multiple users exist in the database, the count reflects the total number of users.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > getUserCount).

## Source

Source: Papra server behaviour notes - SRV-1853
