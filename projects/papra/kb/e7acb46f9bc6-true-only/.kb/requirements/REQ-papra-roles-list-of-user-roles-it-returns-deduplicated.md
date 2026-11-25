---
title: Given a list of user roles, it returns the deduplicated list of permissions for those roles.
status: active
semantic_text: Given a list of user roles, it returns the deduplicated list of permissions for those roles.
semantic_clauses:
  - Given a list of user roles, it returns the deduplicated list of permissions for those roles
logic_claims:
  - CLAIM-B4CE458DC422BB5F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e2635ff389b3cbe83d436158aa6b1258e109cb98fcc7dfef53a9afbb5621b64f
semantic_inventory:
  - claim_key: CLAIM-B4CE458DC422BB5F
    claim_text: Given a list of user roles, it returns the deduplicated list of permissions for those roles
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - roles.get_permissions_for_roles
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1705'
  recorded_at: '2025-12-09T14:32:25.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:roles
id: REQ-papra-roles-list-of-user-roles-it-returns-deduplicated
type: req
---
Given a list of user roles, it returns the deduplicated list of permissions for those roles.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/roles/roles.methods.test.ts (roles methods > getPermissionsForRoles).

## Source

Source: Papra server behaviour notes - SRV-1705
