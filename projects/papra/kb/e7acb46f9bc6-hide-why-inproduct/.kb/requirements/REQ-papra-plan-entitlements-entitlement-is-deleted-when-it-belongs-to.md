---
title: The entitlement is deleted when it belongs to the given user.
status: active
semantic_text: The entitlement is deleted when it belongs to the given user.
semantic_clauses:
  - The entitlement is deleted when it belongs to the given user
logic_claims:
  - CLAIM-269BDA81DB7D5F97
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 00452c770dfac666a56f90cd6e11713cf11bbad79741a1eb5e00ea9677e4f9c9
semantic_inventory:
  - claim_key: CLAIM-269BDA81DB7D5F97
    claim_text: The entitlement is deleted when it belongs to the given user
    role: normative
    status: modeled
    span:
      start: 0
      end: 60
    subjects:
      - plan_entitlements.delete_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1628'
  recorded_at: '2026-06-25T09:54:18.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-entitlement-is-deleted-when-it-belongs-to
type: req
---
The entitlement is deleted when it belongs to the given user.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.repository.test.ts (plan-entitlements repository > deleteUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1628
