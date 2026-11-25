---
title: organizations.invite_member_to_organization cannot_create_multiple_invitations_for_the_same_email = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: cannot_create_multiple_invitations_for_the_same_email
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-33D882A8076CB4E4
claim_text: Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion
text_ref: REQ-papra-organizations-cannot-create-multiple-invitations-for-same-email
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1558'
  recorded_at: '2025-02-23T14:40:00.000Z'
id: FACT-papra-organizations-invite-member-to-organization-cannot-create-multiple-invitations-for-the-same-email
type: fact
---
Cannot create multiple invitations for the same email address to the same organization to prevent spam and confusion.

Modeled from REQ-papra-organizations-cannot-create-multiple-invitations-for-same-email so the claim can be checked for contradictions.
