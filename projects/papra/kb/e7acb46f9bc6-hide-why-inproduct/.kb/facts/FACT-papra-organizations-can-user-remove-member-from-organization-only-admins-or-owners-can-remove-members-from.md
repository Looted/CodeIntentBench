---
title: organizations.can_user_remove_member_from_organization only_admins_or_owners_can_remove_members_from = True
status: active
fact_kind: property_value
subject_key: organizations.can_user_remove_member_from_organization
property_key: only_admins_or_owners_can_remove_members_from
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-27B50F2DE6886A61
claim_text: Only admins or owners can remove members from an organization
text_ref: REQ-papra-organizations-only-admins-or-owners-can-remove-members
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1464'
  recorded_at: '2025-12-01T11:18:32.000Z'
id: FACT-papra-organizations-can-user-remove-member-from-organization-only-admins-or-owners-can-remove-members-from
type: fact
---
Only admins or owners can remove members from an organization.

Modeled from REQ-papra-organizations-only-admins-or-owners-can-remove-members so the claim can be checked for contradictions.
