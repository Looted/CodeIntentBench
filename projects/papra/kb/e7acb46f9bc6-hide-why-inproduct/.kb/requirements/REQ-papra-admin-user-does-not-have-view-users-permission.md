---
title: When the user does not have the VIEW_USERS permission, a 401 error is returned.
status: active
semantic_text: When the user does not have the VIEW_USERS permission, a 401 error is returned.
semantic_clauses:
  - When the user does not have the VIEW_USERS permission, a 401 error is returned
logic_claims:
  - CLAIM-8DE93BB217401331
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 7c9b99bf142b0a22cae8d228f8143470ba91747873e146035555dc9d75d498b9
semantic_inventory:
  - claim_key: CLAIM-8DE93BB217401331
    claim_text: When the user does not have the VIEW_USERS permission, a 401 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - admin.admin_organizations_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-414'
  recorded_at: '2026-06-23T08:08:50.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-does-not-have-view-users-permission
type: req
---
When the user does not have the VIEW_USERS permission, a 401 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/organizations/e2e/organizations.e2e.test.ts (admin organizations routes - permission protection > get /api/admin/organizations).

## Source

Source: Papra server behaviour notes - SRV-414
