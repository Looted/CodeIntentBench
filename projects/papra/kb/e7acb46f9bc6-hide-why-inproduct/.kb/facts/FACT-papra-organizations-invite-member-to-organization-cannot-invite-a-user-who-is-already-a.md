---
title: organizations.invite_member_to_organization cannot_invite_a_user_who_is_already_a = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: cannot_invite_a_user_who_is_already_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C9FB7AA1AC7700B9
claim_text: Cannot invite a user who is already a member of the organization to prevent duplicate memberships
text_ref: REQ-papra-organizations-cannot-invite-user-who-is-already-member
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1563'
  recorded_at: '2026-09-26T13:33:42.000Z'
id: FACT-papra-organizations-invite-member-to-organization-cannot-invite-a-user-who-is-already-a
type: fact
---
Cannot invite a user who is already a member of the organization to prevent duplicate memberships.

Modeled from REQ-papra-organizations-cannot-invite-user-who-is-already-member so the claim can be checked for contradictions.
