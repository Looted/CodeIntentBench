---
title: When no price id matches a plan, or when there is no item at all, the plan is undefined.
status: active
semantic_text: When no price id matches a plan, or when there is no item at all, the plan is undefined.
semantic_clauses:
  - When no price id matches a plan, or when there is no item at all, the plan is undefined
logic_claims:
  - CLAIM-F3CC1CD071BE1DC6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: af4c139d9a637e211ebde8b4bf4b423f726888938c4f7aff63d2a1e649928359
semantic_inventory:
  - claim_key: CLAIM-F3CC1CD071BE1DC6
    claim_text: When no price id matches a plan, or when there is no item at all, the plan is undefined
    role: condition
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - plans.resolve_organization_plan_from_price_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1681'
  recorded_at: '2025-05-05T11:41:43.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-no-price-id-matches-plan-or-when
type: req
---
When no price id matches a plan, or when there is no item at all, the plan is undefined.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.models.test.ts (plans models > resolveOrganizationPlanFromPriceIds).

## Source

Source: Papra server behaviour notes - SRV-1681
