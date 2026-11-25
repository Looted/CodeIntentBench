---
title: Deleting an user cascades the authentication related data, accounts, sessions, 2fa.
status: active
semantic_text: Deleting an user cascades the authentication related data, accounts, sessions, 2fa.
semantic_clauses:
  - Deleting an user cascades the authentication related data, accounts, sessions, 2fa
logic_claims:
  - CLAIM-EC0359F9AB47DA60
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 396844dc1e7151bc77680bef5b9fdf147ad6468c6f9d7951862e0190c24207f7
semantic_inventory:
  - claim_key: CLAIM-EC0359F9AB47DA60
    claim_text: Deleting an user cascades the authentication related data, accounts, sessions, 2fa
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - users.delete_user
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1871'
  recorded_at: '2026-07-10T10:55:39.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-deleting-user-cascades-authentication-related-data-accounts
type: req
---
Deleting an user cascades the authentication related data, accounts, sessions, 2fa.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.usecases.test.ts (users usecases > deleteUser).

## Source

Source: Papra server behaviour notes - SRV-1871
