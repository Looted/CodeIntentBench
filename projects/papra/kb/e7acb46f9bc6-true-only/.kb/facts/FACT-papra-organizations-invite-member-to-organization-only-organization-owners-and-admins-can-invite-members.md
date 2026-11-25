---
title: organizations.invite_member_to_organization only_organization_owners_and_admins_can_invite_members = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: only_organization_owners_and_admins_can_invite_members
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0FF9F880BD96BF73
claim_text: Only organization owners and admins can invite members, regular members cannot send invitations
text_ref: REQ-papra-organizations-only-organization-owners-and-admins-can-invite
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1583'
  recorded_at: '2025-07-04T10:36:33.000Z'
id: FACT-papra-organizations-invite-member-to-organization-only-organization-owners-and-admins-can-invite-members
type: fact
---
Only organization owners and admins can invite members, regular members cannot send invitations.

Modeled from REQ-papra-organizations-only-organization-owners-and-admins-can-invite so the claim can be checked for contradictions.
