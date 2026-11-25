---
title: When the user already has an entitlement of the same type, an already-exists error is raised.
status: active
semantic_text: When the user already has an entitlement of the same type, an already-exists error is raised.
semantic_clauses:
  - When the user already has an entitlement of the same type, an already-exists error is raised
logic_claims:
  - CLAIM-D54D148223F3F585
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0432fe32d8adc53109dbcf7060bbd3dafa3532e5432b56dae4ef6003fa329378
semantic_inventory:
  - claim_key: CLAIM-D54D148223F3F585
    claim_text: When the user already has an entitlement of the same type, an already-exists error is raised
    role: condition
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - plan_entitlements.create_plan_entitlement
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1635'
  recorded_at: '2026-08-27T12:08:42.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plan-entitlements
id: REQ-papra-plan-entitlements-user-already-has-entitlement-of-same-type
type: req
---
When the user already has an entitlement of the same type, an already-exists error is raised.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plan-entitlements/plan-entitlements.repository.test.ts (plan-entitlements repository > createPlanEntitlement).

## Source

Source: Papra server behaviour notes - SRV-1635
