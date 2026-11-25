---
title: When the organization does not exist, a 404 error is returned.
status: active
semantic_text: When the organization does not exist, a 404 error is returned.
semantic_clauses:
  - When the organization does not exist, a 404 error is returned
logic_claims:
  - CLAIM-21BAED7701251820
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4614c2f335cf79b434d449527be88d66e2c2162de22e5e0147e82442d1542351
semantic_inventory:
  - claim_key: CLAIM-21BAED7701251820
    claim_text: When the organization does not exist, a 404 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - admin.admin_organizations_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-410'
  recorded_at: '2025-12-01T14:23:26.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-organization-does-not-exist-404-error-is
type: req
---
When the organization does not exist, a 404 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/organizations/e2e/organizations.e2e.test.ts (admin organizations routes - permission protection > get /api/admin/organizations/:organizationId).

## Source

Source: Papra server behaviour notes - SRV-410
