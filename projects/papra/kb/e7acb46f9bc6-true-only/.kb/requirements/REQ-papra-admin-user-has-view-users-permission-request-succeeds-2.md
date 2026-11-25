---
title: When the user has the VIEW_USERS permission, the request succeeds and returns webhooks.
status: active
semantic_text: When the user has the VIEW_USERS permission, the request succeeds and returns webhooks.
semantic_clauses:
  - When the user has the VIEW_USERS permission, the request succeeds and returns webhooks
logic_claims:
  - CLAIM-680BFE27EE598243
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: de707ff50369e57341ccbc088c219378453a5bf071c95489783d992bb843891e
semantic_inventory:
  - claim_key: CLAIM-680BFE27EE598243
    claim_text: When the user has the VIEW_USERS permission, the request succeeds and returns webhooks
    role: condition
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - admin.admin_organizations_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-419'
  recorded_at: '2026-03-21T12:50:04.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-has-view-users-permission-request-succeeds-2
type: req
---
When the user has the VIEW_USERS permission, the request succeeds and returns webhooks.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/organizations/e2e/organizations.e2e.test.ts (admin organizations routes - permission protection > get /api/admin/organizations/:organizationId/webhooks).

## Source

Source: Papra server behaviour notes - SRV-419
