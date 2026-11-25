---
title: The most generous plan is kept regardless of the order of the subscription items.
status: active
semantic_text: The most generous plan is kept regardless of the order of the subscription items.
semantic_clauses:
  - The most generous plan is kept regardless of the order of the subscription items
logic_claims:
  - CLAIM-69D806AF7F0516A5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 04d0a79f3a052bf42000bd8c806c1e9a6245455348bc60e326139f4ff207976a
semantic_inventory:
  - claim_key: CLAIM-69D806AF7F0516A5
    claim_text: The most generous plan is kept regardless of the order of the subscription items
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - plans.resolve_organization_plan_from_price_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1678'
  recorded_at: '2025-10-19T10:23:36.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-most-generous-plan-is-kept-regardless-of
type: req
---
The most generous plan is kept regardless of the order of the subscription items.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.models.test.ts (plans models > resolveOrganizationPlanFromPriceIds).

## Source

Source: Papra server behaviour notes - SRV-1678
