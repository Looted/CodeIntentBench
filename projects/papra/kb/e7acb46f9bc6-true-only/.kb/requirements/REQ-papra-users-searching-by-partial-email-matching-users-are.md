---
title: When searching by partial email, matching users are returned.
status: active
semantic_text: When searching by partial email, matching users are returned.
semantic_clauses:
  - When searching by partial email, matching users are returned
logic_claims:
  - CLAIM-21168DB8E3CC9C12
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5c3452fc6f0d2b6e2feb7cd9f21e14e24f99d960b52df41b558f1eccb3e47515
semantic_inventory:
  - claim_key: CLAIM-21168DB8E3CC9C12
    claim_text: When searching by partial email, matching users are returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - users.list_users
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1865'
  recorded_at: '2025-08-11T11:29:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-searching-by-partial-email-matching-users-are
type: req
---
When searching by partial email, matching users are returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > listUsers).

## Source

Source: Papra server behaviour notes - SRV-1865
