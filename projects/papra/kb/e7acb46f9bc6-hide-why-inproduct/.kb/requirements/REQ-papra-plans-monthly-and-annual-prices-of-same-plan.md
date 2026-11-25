---
title: The monthly and annual prices of a same plan are not considered ambiguous.
status: active
semantic_text: The monthly and annual prices of a same plan are not considered ambiguous.
semantic_clauses:
  - The monthly and annual prices of a same plan are not considered ambiguous
logic_claims:
  - CLAIM-D508E8268A6B8D14
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4dd1deb75c9fa4b321e6762b299a2bfdd190ec141b1b506f7397003f7be21355
semantic_inventory:
  - claim_key: CLAIM-D508E8268A6B8D14
    claim_text: The monthly and annual prices of a same plan are not considered ambiguous
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - plans.resolve_organization_plan_from_price_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1674'
  recorded_at: '2025-05-26T15:39:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-monthly-and-annual-prices-of-same-plan
type: req
---
The monthly and annual prices of a same plan are not considered ambiguous.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.models.test.ts (plans models > resolveOrganizationPlanFromPriceIds).

## Source

Source: Papra server behaviour notes - SRV-1674
