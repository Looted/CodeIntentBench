---
title: Throws an error when the user still owns an organization.
status: active
semantic_text: Throws an error when the user still owns an organization.
semantic_clauses:
  - Throws an error when the user still owns an organization
logic_claims:
  - CLAIM-106104BB03B88D91
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 131044f1beb72b7cb97bc57e1fb42c32fec01eb9ec760ca103058aa78e423deb
semantic_inventory:
  - claim_key: CLAIM-106104BB03B88D91
    claim_text: Throws an error when the user still owns an organization
    role: normative
    status: modeled
    span:
      start: 0
      end: 56
    subjects:
      - users.delete_user
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1875'
  recorded_at: '2025-09-26T10:07:19.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:users
id: REQ-papra-users-throws-error-when-user-still-owns-organization
type: req
---
Throws an error when the user still owns an organization.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/users/users.usecases.test.ts (users usecases > deleteUser).

## Source

Source: Papra server behaviour notes - SRV-1875
