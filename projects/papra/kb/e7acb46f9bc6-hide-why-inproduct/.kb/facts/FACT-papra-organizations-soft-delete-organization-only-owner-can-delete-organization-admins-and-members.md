---
title: organizations.soft_delete_organization only_owner_can_delete_organization_admins_and_members = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: only_owner_can_delete_organization_admins_and_members
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-559981E416DBF05F
claim_text: Only owner can delete organization, admins and members cannot
text_ref: REQ-papra-organizations-only-owner-can-delete-organization-admins-and
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1587'
  recorded_at: '2025-06-11T11:46:50.000Z'
id: FACT-papra-organizations-soft-delete-organization-only-owner-can-delete-organization-admins-and-members
type: fact
---
Only owner can delete organization, admins and members cannot.

Modeled from REQ-papra-organizations-only-owner-can-delete-organization-admins-and so the claim can be checked for contradictions.
