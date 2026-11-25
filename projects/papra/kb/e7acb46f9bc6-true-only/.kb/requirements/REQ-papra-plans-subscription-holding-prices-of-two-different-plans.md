---
title: A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscriptio…
status: active
semantic_text: A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscription stale.
semantic_clauses:
  - A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscription stale
logic_claims:
  - CLAIM-E359F79A5350BD55
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1edc9c46450ae049f8f1e89e4f7f8af22636a790f42bb815c1882cafbfbd57be
semantic_inventory:
  - claim_key: CLAIM-E359F79A5350BD55
    claim_text: A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscription stale
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 164
    subjects:
      - plans.resolve_organization_plan_from_price_ids
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1670'
  recorded_at: '2025-10-08T14:12:30.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-subscription-holding-prices-of-two-different-plans
type: req
---
A subscription holding the prices of two different plans keeps the most generous one and reports the others, as blocking the sync would leave the subscription stale.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.models.test.ts (plans models > resolveOrganizationPlanFromPriceIds).

## Source

Source: Papra server behaviour notes - SRV-1670
