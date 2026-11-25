---
title: Admin-granted and already-expired entitlements are not re-verified.
status: active
semantic_text: Admin-granted and already-expired entitlements are not re-verified.
semantic_clauses:
  - Admin-granted and already-expired entitlements are not re-verified
logic_claims:
  - CLAIM-0C303CF1E94903C6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7a8e16e62873f87073d3e02f25e54a9883fd8dd75debae27a5439bb998e4835
semantic_inventory:
  - claim_key: CLAIM-0C303CF1E94903C6
    claim_text: Admin-granted and already-expired entitlements are not re-verified
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 66
    subjects:
      - plan_entitlements.reverify_user_claimed_plan_entitlements
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1642'
  recorded_at: '2026-01-18T14:24:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-admin-granted-and-already-expired-entitlements-are
type: req
---
Admin-granted and already-expired entitlements are not re-verified.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > reverifyUserClaimedPlanEntitlements).

## Source

Source: Papra server behaviour notes - SRV-1642
