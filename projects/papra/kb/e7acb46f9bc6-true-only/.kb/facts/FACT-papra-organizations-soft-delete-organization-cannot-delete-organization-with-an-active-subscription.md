---
title: organizations.soft_delete_organization cannot_delete_organization_with_an_active_subscription = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: cannot_delete_organization_with_an_active_subscription
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-063753299FA1CA0A
claim_text: Cannot delete organization with an active subscription
text_ref: REQ-papra-organizations-cannot-delete-organization-with-active-subscription
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1560'
  recorded_at: '2026-04-03T08:50:50.000Z'
id: FACT-papra-organizations-soft-delete-organization-cannot-delete-organization-with-an-active-subscription
type: fact
---
Cannot delete organization with an active subscription.

Modeled from REQ-papra-organizations-cannot-delete-organization-with-active-subscription so the claim can be checked for contradictions.
