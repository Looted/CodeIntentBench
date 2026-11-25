---
title: When a user already exists with the same email, an error is thrown.
status: active
semantic_text: When a user already exists with the same email, an error is thrown.
semantic_clauses:
  - When a user already exists with the same email, an error is thrown
logic_claims:
  - CLAIM-C8F3EE382105B187
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de17a15834d33ba296d79b053ac967250b10925d52efd46d80a42dcc9383a7e9
semantic_inventory:
  - claim_key: CLAIM-C8F3EE382105B187
    claim_text: When a user already exists with the same email, an error is thrown
    role: condition
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - users.create_user
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1850'
  recorded_at: '2026-03-10T12:52:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-user-already-exists-with-same-email-error
type: req
---
When a user already exists with the same email, an error is thrown.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > createUser).

## Source

Source: Papra server behaviour notes - SRV-1850
