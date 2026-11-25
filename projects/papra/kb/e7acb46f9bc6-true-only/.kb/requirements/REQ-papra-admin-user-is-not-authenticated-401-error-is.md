---
title: When the user is not authenticated, a 401 error is returned.
status: active
semantic_text: When the user is not authenticated, a 401 error is returned.
semantic_clauses:
  - When the user is not authenticated, a 401 error is returned
logic_claims:
  - CLAIM-8DF9E4FAFE12B003
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c1617ad5d22683cfffc1e20771d7fb058b752b447552f68052c3c6a255974559
semantic_inventory:
  - claim_key: CLAIM-8DF9E4FAFE12B003
    claim_text: When the user is not authenticated, a 401 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - admin.analytics_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-407'
  recorded_at: '2025-08-17T14:18:16.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-is-not-authenticated-401-error-is
type: req
---
When the user is not authenticated, a 401 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/analytics/e2e/analytics.e2e.test.ts (analytics routes - permission protection > get /api/admin/users/count).

## Source

Source: Papra server behaviour notes - SRV-407
