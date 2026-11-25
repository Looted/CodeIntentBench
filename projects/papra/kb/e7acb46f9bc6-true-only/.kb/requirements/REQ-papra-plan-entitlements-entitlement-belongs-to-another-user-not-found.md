---
title: When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept.
status: active
semantic_text: When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept.
semantic_clauses:
  - When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept
logic_claims:
  - CLAIM-82F5CD97F48E967D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3bac9d356ff9439efa88ef1590f4096835431d7c607dc54c4b6c4ada0f142c2f
semantic_inventory:
  - claim_key: CLAIM-82F5CD97F48E967D
    claim_text: When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept
    role: condition
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - plan_entitlements.delete_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1629'
  recorded_at: '2025-08-25T13:08:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-entitlement-belongs-to-another-user-not-found
type: req
---
When the entitlement belongs to another user, a not-found error is raised and the entitlement is kept.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.repository.test.ts (plan-entitlements repository > deleteUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1629
