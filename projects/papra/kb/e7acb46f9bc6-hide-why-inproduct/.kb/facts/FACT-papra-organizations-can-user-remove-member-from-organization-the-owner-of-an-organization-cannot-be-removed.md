---
title: organizations.can_user_remove_member_from_organization the_owner_of_an_organization_cannot_be_removed = True
status: active
fact_kind: property_value
subject_key: organizations.can_user_remove_member_from_organization
property_key: the_owner_of_an_organization_cannot_be_removed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4F290044E938AF83
claim_text: The owner of an organization cannot be removed
text_ref: REQ-papra-organizations-owner-of-organization-cannot-be-removed
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1466'
  recorded_at: '2026-08-21T11:39:25.000Z'
id: FACT-papra-organizations-can-user-remove-member-from-organization-the-owner-of-an-organization-cannot-be-removed
type: fact
---
The owner of an organization cannot be removed.

Modeled from REQ-papra-organizations-owner-of-organization-cannot-be-removed so the claim can be checked for contradictions.
