---
title: When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned.
status: active
semantic_text: When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned.
semantic_clauses:
  - When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned
logic_claims:
  - CLAIM-8721E2914201AAD5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c301ee7495b104171f22e21d63a7983cb0ab1c95a1c735220276c294703c05b9
semantic_inventory:
  - claim_key: CLAIM-8721E2914201AAD5
    claim_text: When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned
    role: condition
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - admin.analytics_routes_permission_protection
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-403'
  recorded_at: '2025-03-16T14:03:02.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:admin
id: REQ-papra-admin-user-does-not-have-view-analytics-permission
type: req
---
When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/admin/analytics/e2e/analytics.e2e.test.ts (analytics routes - permission protection > get /api/admin/users/count).

## Source

Source: Papra server behaviour notes - SRV-403
