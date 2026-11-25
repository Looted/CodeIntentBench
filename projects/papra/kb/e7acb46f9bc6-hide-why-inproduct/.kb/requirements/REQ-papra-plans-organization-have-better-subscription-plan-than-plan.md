---
title: If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied.
status: active
semantic_text: If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied.
semantic_clauses:
  - If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied
logic_claims:
  - CLAIM-8E3D422656DEBD12
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 413134183abcd5dcf972a50713d7d4ca6960fba2b28450ba18068dfd822fbecd
semantic_inventory:
  - claim_key: CLAIM-8E3D422656DEBD12
    claim_text: If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied
    role: condition
    status: modeled
    span:
      start: 0
      end: 117
    subjects:
      - plans.get_organization_plan
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1692'
  recorded_at: '2025-02-27T09:57:51.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-organization-have-better-subscription-plan-than-plan
type: req
---
If an organization have a better subscription plan than the plan entitlement, the subscription plan should be applied.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.usecases.test.ts (plans usecases > getOrganizationPlan > plan entitlements).

## Source

Source: Papra server behaviour notes - SRV-1692
