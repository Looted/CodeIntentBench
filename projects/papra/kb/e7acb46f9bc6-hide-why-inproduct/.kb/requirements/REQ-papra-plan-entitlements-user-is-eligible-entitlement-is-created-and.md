---
title: When the user is eligible, the entitlement is created and marked as verified.
status: active
semantic_text: When the user is eligible, the entitlement is created and marked as verified.
semantic_clauses:
  - When the user is eligible, the entitlement is created and marked as verified
logic_claims:
  - CLAIM-6AE32ADD92BBC8EE
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 660303df3afd4f38e4bb049616dd645a51cbb3b1145edbc4f2b080b162ee149b
semantic_inventory:
  - claim_key: CLAIM-6AE32ADD92BBC8EE
    claim_text: When the user is eligible, the entitlement is created and marked as verified
    role: condition
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - plan_entitlements.grant_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1661'
  recorded_at: '2026-06-14T11:39:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-user-is-eligible-entitlement-is-created-and
type: req
---
When the user is eligible, the entitlement is created and marked as verified.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > grantUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1661
