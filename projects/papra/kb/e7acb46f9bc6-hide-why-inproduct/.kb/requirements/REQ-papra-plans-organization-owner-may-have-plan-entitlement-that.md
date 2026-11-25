---
title: An organization owner may have a plan entitlement that overrides the organization subscription plan.
status: active
semantic_text: An organization owner may have a plan entitlement that overrides the organization subscription plan.
semantic_clauses:
  - An organization owner may have a plan entitlement that overrides the organization subscription plan
logic_claims:
  - CLAIM-C24269140513C671
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ae38d92246a7e381fc1b5910e1cad878608dd476da94138958661c60823da7e9
semantic_inventory:
  - claim_key: CLAIM-C24269140513C671
    claim_text: An organization owner may have a plan entitlement that overrides the organization subscription plan
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 99
    subjects:
      - plans.get_organization_plan
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1689'
  recorded_at: '2026-08-09T12:26:37.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:plans
id: REQ-papra-plans-organization-owner-may-have-plan-entitlement-that
type: req
---
An organization owner may have a plan entitlement that overrides the organization subscription plan.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/plans/plans.usecases.test.ts (plans usecases > getOrganizationPlan > plan entitlements).

## Source

Source: Papra server behaviour notes - SRV-1689
