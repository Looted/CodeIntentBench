---
title: organizations.invite_member_to_organization cannot_invite_new_members_when_the_organization_has = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: cannot_invite_new_members_when_the_organization_has
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1D48F7994D3BCB5D
claim_text: Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits
text_ref: REQ-papra-organizations-cannot-invite-new-members-when-organization-has
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1564'
  recorded_at: '2026-04-19T12:53:26.000Z'
id: FACT-papra-organizations-invite-member-to-organization-cannot-invite-new-members-when-the-organization-has
type: fact
---
Cannot invite new members when the organization has reached its maximum member count (including pending invitations) defined by the plan to enforce subscription limits.

Modeled from REQ-papra-organizations-cannot-invite-new-members-when-organization-has so the claim can be checked for contradictions.
