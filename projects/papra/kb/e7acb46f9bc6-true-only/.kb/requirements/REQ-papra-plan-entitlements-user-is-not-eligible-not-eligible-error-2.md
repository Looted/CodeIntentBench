---
title: When the user is not eligible, a not-eligible error is raised and no entitlement is created.
status: active
semantic_text: When the user is not eligible, a not-eligible error is raised and no entitlement is created.
semantic_clauses:
  - When the user is not eligible, a not-eligible error is raised and no entitlement is created
logic_claims:
  - CLAIM-19723F450CE74826
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 5176eba791e9ef9bdcc710e74d6af487afbad42261fcf151288ac798b6a9130e
semantic_inventory:
  - claim_key: CLAIM-19723F450CE74826
    claim_text: When the user is not eligible, a not-eligible error is raised and no entitlement is created
    role: condition
    status: modeled
    span:
      start: 0
      end: 91
    subjects:
      - plan_entitlements.grant_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1664'
  recorded_at: '2025-02-07T14:31:46.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-user-is-not-eligible-not-eligible-error-2
type: req
---
When the user is not eligible, a not-eligible error is raised and no entitlement is created.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > grantUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1664
