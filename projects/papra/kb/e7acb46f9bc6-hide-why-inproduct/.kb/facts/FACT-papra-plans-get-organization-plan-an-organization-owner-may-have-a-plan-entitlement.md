---
title: plans.get_organization_plan an_organization_owner_may_have_a_plan_entitlement = True
status: active
fact_kind: property_value
subject_key: plans.get_organization_plan
property_key: an_organization_owner_may_have_a_plan_entitlement
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C24269140513C671
claim_text: An organization owner may have a plan entitlement that overrides the organization subscription plan
text_ref: REQ-papra-plans-organization-owner-may-have-plan-entitlement-that
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1689'
  recorded_at: '2026-08-09T12:26:37.000Z'
id: FACT-papra-plans-get-organization-plan-an-organization-owner-may-have-a-plan-entitlement
type: fact
---
An organization owner may have a plan entitlement that overrides the organization subscription plan.

Modeled from REQ-papra-plans-organization-owner-may-have-plan-entitlement-that so the claim can be checked for contradictions.
