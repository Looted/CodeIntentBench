---
title: organizations.invite_member_to_organization users_who_are_not_members_of_the_organization = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: users_who_are_not_members_of_the_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A94304923C40F071
claim_text: Users who are not members of the organization cannot send invitations to prevent unauthorized access
text_ref: REQ-papra-organizations-users-who-are-not-members-of-organization
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1626'
  recorded_at: '2025-10-01T16:11:08.000Z'
id: FACT-papra-organizations-invite-member-to-organization-users-who-are-not-members-of-the-organization
type: fact
---
Users who are not members of the organization cannot send invitations to prevent unauthorized access.

Modeled from REQ-papra-organizations-users-who-are-not-members-of-organization so the claim can be checked for contradictions.
