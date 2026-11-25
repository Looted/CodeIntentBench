---
title: An organization may be subscribed to a plan.
status: active
semantic_text: An organization may be subscribed to a plan.
semantic_clauses:
  - An organization may be subscribed to a plan
logic_claims:
  - CLAIM-D2639C06474148B3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1806d11888ce255b4a469b267e912da85158c9899901aa15be1a8f429d435d10
semantic_inventory:
  - claim_key: CLAIM-D2639C06474148B3
    claim_text: An organization may be subscribed to a plan
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 43
    subjects:
      - plans.get_organization_plan
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1686'
  recorded_at: '2025-06-03T09:09:07.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-organization-may-be-subscribed-to-plan
type: req
---
An organization may be subscribed to a plan.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.usecases.test.ts (plans usecases > getOrganizationPlan).

## Source

Source: Papra server behaviour notes - SRV-1686
