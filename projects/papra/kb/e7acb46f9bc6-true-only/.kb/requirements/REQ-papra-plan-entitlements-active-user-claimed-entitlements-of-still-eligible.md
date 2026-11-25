---
title: Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated.
status: active
semantic_text: Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated.
semantic_clauses:
  - Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated
logic_claims:
  - CLAIM-C4C67F775962EB64
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 338187344c102b07f47bd429e8fb57f0993021190c4b353fadb1d4e986e543bd
semantic_inventory:
  - claim_key: CLAIM-C4C67F775962EB64
    claim_text: Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 122
    subjects:
      - plan_entitlements.reverify_user_claimed_plan_entitlements
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1638'
  recorded_at: '2025-05-08T16:01:41.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-active-user-claimed-entitlements-of-still-eligible
type: req
---
Active user-claimed entitlements of still-eligible users get their expiration rolled forward and verification date updated.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > reverifyUserClaimedPlanEntitlements).

## Source

Source: Papra server behaviour notes - SRV-1638
