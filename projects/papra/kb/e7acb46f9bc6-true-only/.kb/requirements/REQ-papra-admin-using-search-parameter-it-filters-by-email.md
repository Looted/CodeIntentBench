---
title: When using search parameter, it filters by email.
status: active
semantic_text: When using search parameter, it filters by email.
semantic_clauses:
  - When using search parameter, it filters by email
logic_claims:
  - CLAIM-93924AA4425EF58C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 074ab14b9fdcb542724f35d761ad300c80a699281e485b4e23fcb37168bb6eff
semantic_inventory:
  - claim_key: CLAIM-93924AA4425EF58C
    claim_text: When using search parameter, it filters by email
    role: condition
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - admin.admin_users_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-443'
  recorded_at: '2026-05-20T11:17:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-using-search-parameter-it-filters-by-email
type: req
---
When using search parameter, it filters by email.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/users/e2e/users.e2e.test.ts (admin users routes - permission protection > get /api/admin/users).

## Source

Source: Papra server behaviour notes - SRV-443
