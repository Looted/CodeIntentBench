---
title: When searching with an empty string, all users are returned.
status: active
semantic_text: When searching with an empty string, all users are returned.
semantic_clauses:
  - When searching with an empty string, all users are returned
logic_claims:
  - CLAIM-67045AE76766F988
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f5be7eac59570909fec4efdcaa2c27c2e193374ed4367dc6872e23a7de3ce35b
semantic_inventory:
  - claim_key: CLAIM-67045AE76766F988
    claim_text: When searching with an empty string, all users are returned
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
  ref: 'Papra server behaviour notes: SRV-1869'
  recorded_at: '2025-12-01T14:31:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-searching-with-empty-string-all-users-are
type: req
---
When searching with an empty string, all users are returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.repository.test.ts (users repository > listUsers).

## Source

Source: Papra server behaviour notes - SRV-1869
