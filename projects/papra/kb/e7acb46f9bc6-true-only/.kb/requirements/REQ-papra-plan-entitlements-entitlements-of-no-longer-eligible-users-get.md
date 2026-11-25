---
title: Entitlements of no-longer-eligible users get their expiration capped to the grace period.
status: active
semantic_text: Entitlements of no-longer-eligible users get their expiration capped to the grace period.
semantic_clauses:
  - Entitlements of no-longer-eligible users get their expiration capped to the grace period
logic_claims:
  - CLAIM-5EE646A5C6EF9412
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 674a7b98fb02c159ba042a60f828da650fa95d361a031b00cd783dfff34e1ed8
semantic_inventory:
  - claim_key: CLAIM-5EE646A5C6EF9412
    claim_text: Entitlements of no-longer-eligible users get their expiration capped to the grace period
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - plan_entitlements.reverify_user_claimed_plan_entitlements
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1643'
  recorded_at: '2025-04-14T15:31:48.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-entitlements-of-no-longer-eligible-users-get
type: req
---
Entitlements of no-longer-eligible users get their expiration capped to the grace period.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > reverifyUserClaimedPlanEntitlements).

## Source

Source: Papra server behaviour notes - SRV-1643
