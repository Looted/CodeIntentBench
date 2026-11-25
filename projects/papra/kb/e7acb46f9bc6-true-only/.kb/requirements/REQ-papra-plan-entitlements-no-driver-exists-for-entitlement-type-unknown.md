---
title: When no driver exists for the entitlement type, an unknown-type error is raised.
status: active
semantic_text: When no driver exists for the entitlement type, an unknown-type error is raised.
semantic_clauses:
  - When no driver exists for the entitlement type, an unknown-type error is raised
logic_claims:
  - CLAIM-7A58102F5DB90593
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 58c3318bb048e68ec3dc753befde06ac95c9350c58e8186256752bd7c20836de
semantic_inventory:
  - claim_key: CLAIM-7A58102F5DB90593
    claim_text: When no driver exists for the entitlement type, an unknown-type error is raised
    role: condition
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - plan_entitlements.grant_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1647'
  recorded_at: '2026-01-13T08:31:10.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-no-driver-exists-for-entitlement-type-unknown
type: req
---
When no driver exists for the entitlement type, an unknown-type error is raised.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.usecases.test.ts (plan-entitlements usecases > grantUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1647
