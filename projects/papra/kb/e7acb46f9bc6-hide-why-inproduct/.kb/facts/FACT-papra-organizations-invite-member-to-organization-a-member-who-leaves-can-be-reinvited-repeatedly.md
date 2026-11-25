---
title: organizations.invite_member_to_organization a_member_who_leaves_can_be_reinvited_repeatedly = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: a_member_who_leaves_can_be_reinvited_repeatedly
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8A21E4CD1DC54C22
claim_text: A member who leaves can be reinvited repeatedly while keeping accepted invitations
text_ref: REQ-papra-organizations-member-who-leaves-can-be-reinvited-repeatedly
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1529'
  recorded_at: '2025-07-05T13:39:50.000Z'
id: FACT-papra-organizations-invite-member-to-organization-a-member-who-leaves-can-be-reinvited-repeatedly
type: fact
---
A member who leaves can be reinvited repeatedly while keeping accepted invitations.

Modeled from REQ-papra-organizations-member-who-leaves-can-be-reinvited-repeatedly so the claim can be checked for contradictions.
