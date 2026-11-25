---
title: When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error.
status: active
semantic_text: When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error.
semantic_clauses:
  - When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error
logic_claims:
  - CLAIM-7854543573CEC5FF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b95275c88840f932e5f1d099faf397a365dd7334c15c72a3a1e95d3275e7bac9
semantic_inventory:
  - claim_key: CLAIM-7854543573CEC5FF
    claim_text: When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error
    role: condition
    status: modeled
    span:
      start: 0
      end: 129
    subjects:
      - plan_entitlements.claim_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1660'
  recorded_at: '2025-04-08T09:10:35.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-user-has-expired-entitlement-of-same-type
type: req
---
When the user has an expired entitlement of the same type, it is re-activated in place instead of raising an already-exists error.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > claimUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1660
