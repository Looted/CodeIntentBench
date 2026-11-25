---
title: A plan is matched by its annual price id as well as its monthly one.
status: active
semantic_text: A plan is matched by its annual price id as well as its monthly one.
semantic_clauses:
  - A plan is matched by its annual price id as well as its monthly one
logic_claims:
  - CLAIM-FDF1A97F66F0608C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0ba7cc4fc36304aa373ba8407607266d2379abd74ca70cacf349f9f5dca4a3b4
semantic_inventory:
  - claim_key: CLAIM-FDF1A97F66F0608C
    claim_text: A plan is matched by its annual price id as well as its monthly one
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - plans.resolve_organization_plan_from_price_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1666'
  recorded_at: '2025-08-12T17:55:29.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-plan-is-matched-by-its-annual-price
type: req
---
A plan is matched by its annual price id as well as its monthly one.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.models.test.ts (plans models > resolveOrganizationPlanFromPriceIds).

## Source

Source: Papra server behaviour notes - SRV-1666
