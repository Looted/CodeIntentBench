---
title: When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility.
status: active
semantic_text: When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility.
semantic_clauses:
  - When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility
logic_claims:
  - CLAIM-EE336674201E61AA
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 880e9cc0e14676f0863f0eabe4d0604168a0daacdfbf3a00e5a3b6fa3c901ad5
semantic_inventory:
  - claim_key: CLAIM-EE336674201E61AA
    claim_text: When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility
    role: condition
    status: modeled
    span:
      start: 0
      end: 133
    subjects:
      - plan_entitlements.claim_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1657'
  recorded_at: '2025-08-15T13:34:00.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-user-already-has-active-entitlement-of-same
type: req
---
When the user already has an active entitlement of the same type, an already-exists error is raised without verifying the eligibility.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > claimUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1657
