---
title: organizations.soft_delete_organization can_delete_organization_with_subscription_scheduled_to_cancel = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: can_delete_organization_with_subscription_scheduled_to_cancel
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C0C48DEFB5D17BBD
claim_text: Can delete organization with subscription scheduled to cancel at period end
text_ref: REQ-papra-organizations-can-delete-organization-with-subscription-scheduled-to
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1554'
  recorded_at: '2026-07-09T17:26:28.000Z'
id: FACT-papra-organizations-soft-delete-organization-can-delete-organization-with-subscription-scheduled-to-cancel
type: fact
---
Can delete organization with subscription scheduled to cancel at period end.

Modeled from REQ-papra-organizations-can-delete-organization-with-subscription-scheduled-to so the claim can be checked for contradictions.
