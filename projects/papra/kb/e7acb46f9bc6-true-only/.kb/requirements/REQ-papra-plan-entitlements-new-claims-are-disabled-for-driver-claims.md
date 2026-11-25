---
title: When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created.
status: active
semantic_text: When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created.
semantic_clauses:
  - When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created
logic_claims:
  - CLAIM-F8EA0D44315B2ED7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0509d812b35d1a5cc1578f556b7bc1937a660d0849cde6d4f411cd6a2f7dc5b0
semantic_inventory:
  - claim_key: CLAIM-F8EA0D44315B2ED7
    claim_text: When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created
    role: condition
    status: modeled
    span:
      start: 0
      end: 111
    subjects:
      - plan_entitlements.claim_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1646'
  recorded_at: '2026-02-08T08:02:38.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-new-claims-are-disabled-for-driver-claims
type: req
---
When new claims are disabled for the driver, a claims-not-enabled error is raised and no entitlement is created.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > claimUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1646
