---
title: When the user has the VIEW_USERS permission, the request succeeds and returns intake emails.
status: active
semantic_text: When the user has the VIEW_USERS permission, the request succeeds and returns intake emails.
semantic_clauses:
  - When the user has the VIEW_USERS permission, the request succeeds and returns intake emails
logic_claims:
  - CLAIM-D5B56F8DF5BC2450
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fbcd719f1bdb66e18189d5b3b84708feb33152298f807d506c8f5bc25f13dabb
semantic_inventory:
  - claim_key: CLAIM-D5B56F8DF5BC2450
    claim_text: When the user has the VIEW_USERS permission, the request succeeds and returns intake emails
    role: condition
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - admin.admin_organizations_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-417'
  recorded_at: '2025-08-03T15:15:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-has-view-users-permission-request-succeeds
type: req
---
When the user has the VIEW_USERS permission, the request succeeds and returns intake emails.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/organizations/e2e/organizations.e2e.test.ts (admin organizations routes - permission protection > get /api/admin/organizations/:organizationId/intake-emails).

## Source

Source: Papra server behaviour notes - SRV-417
