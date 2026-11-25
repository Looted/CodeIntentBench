---
title: The ineligibility grace period never extends an entitlement that already expires sooner.
status: active
semantic_text: The ineligibility grace period never extends an entitlement that already expires sooner.
semantic_clauses:
  - The ineligibility grace period never extends an entitlement that already expires sooner
logic_claims:
  - CLAIM-530D120A9265BD78
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3a1e2d932c856329497bfa5dfaf8cc98eaf2e86bd0e39f2361bdaa6f555c1a48
semantic_inventory:
  - claim_key: CLAIM-530D120A9265BD78
    claim_text: The ineligibility grace period never extends an entitlement that already expires sooner
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - plan_entitlements.reverify_user_claimed_plan_entitlements
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1645'
  recorded_at: '2025-03-19T10:35:09.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-ineligibility-grace-period-never-extends-entitlement-that
type: req
---
The ineligibility grace period never extends an entitlement that already expires sooner.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > reverifyUserClaimedPlanEntitlements).

## Source

Source: Papra server behaviour notes - SRV-1645
