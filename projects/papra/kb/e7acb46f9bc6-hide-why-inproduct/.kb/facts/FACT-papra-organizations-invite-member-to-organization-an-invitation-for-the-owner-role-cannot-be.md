---
title: organizations.invite_member_to_organization an_invitation_for_the_owner_role_cannot_be = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: an_invitation_for_the_owner_role_cannot_be
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4BA288C72543872E
claim_text: An invitation for the owner role cannot be created to prevent multiple owners in an organization
text_ref: REQ-papra-organizations-invitation-for-owner-role-cannot-be-created
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1535'
  recorded_at: '2025-08-08T14:44:26.000Z'
id: FACT-papra-organizations-invite-member-to-organization-an-invitation-for-the-owner-role-cannot-be
type: fact
---
An invitation for the owner role cannot be created to prevent multiple owners in an organization.

Modeled from REQ-papra-organizations-invitation-for-owner-role-cannot-be-created so the claim can be checked for contradictions.
