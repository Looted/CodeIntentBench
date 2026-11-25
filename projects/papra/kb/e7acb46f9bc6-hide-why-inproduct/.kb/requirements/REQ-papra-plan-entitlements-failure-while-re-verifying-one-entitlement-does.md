---
title: A failure while re-verifying one entitlement does not prevent the re-verification of the others.
status: active
semantic_text: A failure while re-verifying one entitlement does not prevent the re-verification of the others.
semantic_clauses:
  - A failure while re-verifying one entitlement does not prevent the re-verification of the others
logic_claims:
  - CLAIM-01F10ECFAED09D7F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: bd5730e79d1bb721ff70177aab33922b0ab8b6d702f5c47afcc99550adfd30f2
semantic_inventory:
  - claim_key: CLAIM-01F10ECFAED09D7F
    claim_text: A failure while re-verifying one entitlement does not prevent the re-verification of the others
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - plan_entitlements.reverify_user_claimed_plan_entitlements
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1636'
  recorded_at: '2025-03-27T13:26:58.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-failure-while-re-verifying-one-entitlement-does
type: req
---
A failure while re-verifying one entitlement does not prevent the re-verification of the others.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > reverifyUserClaimedPlanEntitlements).

## Source

Source: Papra server behaviour notes - SRV-1636
