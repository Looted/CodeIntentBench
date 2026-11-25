---
title: Throws an error when the user does not exist.
status: active
semantic_text: Throws an error when the user does not exist.
semantic_clauses:
  - Throws an error when the user does not exist
logic_claims:
  - CLAIM-A60BEBCB57CAE80E
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1c80a8ee9f914f3fc26fd85b432434d600a28a49527927b438fbd66ffb048bb8
semantic_inventory:
  - claim_key: CLAIM-A60BEBCB57CAE80E
    claim_text: Throws an error when the user does not exist
    role: normative
    status: modeled
    span:
      start: 0
      end: 44
    subjects:
      - users.delete_user
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1873'
  recorded_at: '2025-03-20T10:58:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-throws-error-when-user-does-not-exist
type: req
---
Throws an error when the user does not exist.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.usecases.test.ts (users usecases > deleteUser).

## Source

Source: Papra server behaviour notes - SRV-1873
