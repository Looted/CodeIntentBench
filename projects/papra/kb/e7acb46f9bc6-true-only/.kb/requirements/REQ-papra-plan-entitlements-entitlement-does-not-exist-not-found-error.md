---
title: When the entitlement does not exist, a not-found error is raised.
status: active
semantic_text: When the entitlement does not exist, a not-found error is raised.
semantic_clauses:
  - When the entitlement does not exist, a not-found error is raised
logic_claims:
  - CLAIM-2350EEF085F1CF3B
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a3edfbd8a87d146464a7ea1540693b631cb69cab7ff3b52b30128a852ec7c954
semantic_inventory:
  - claim_key: CLAIM-2350EEF085F1CF3B
    claim_text: When the entitlement does not exist, a not-found error is raised
    role: condition
    status: modeled
    span:
      start: 0
      end: 64
    subjects:
      - plan_entitlements.delete_user_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1632'
  recorded_at: '2026-04-12T14:49:17.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-entitlement-does-not-exist-not-found-error
type: req
---
When the entitlement does not exist, a not-found error is raised.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.repository.test.ts (plan-entitlements repository > deleteUserPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1632
