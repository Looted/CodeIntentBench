---
title: When the user is not eligible, a not-eligible error is raised.
status: active
semantic_text: When the user is not eligible, a not-eligible error is raised.
semantic_clauses:
  - When the user is not eligible, a not-eligible error is raised
logic_claims:
  - CLAIM-38B9439289CF6F3D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 790cdedfa62c90a112c69881d2b066f771c5f6ef7af8dc43919d07259208a735
semantic_inventory:
  - claim_key: CLAIM-38B9439289CF6F3D
    claim_text: When the user is not eligible, a not-eligible error is raised
    role: condition
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - plan_entitlements.claim_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1662'
  recorded_at: '2025-08-07T09:58:22.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-user-is-not-eligible-not-eligible-error
type: req
---
When the user is not eligible, a not-eligible error is raised.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > claimUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1662
