---
title: organizations.organization assignable_roles = admin_or_member
status: active
fact_kind: property_value
subject_key: organizations.organization
property_key: assignable_roles
operator: eq
value_type: string
value_string: admin_or_member
claim_key: CLAIM-B1BA3B4AFB57E890
claim_text: Invitations and role changes can only grant the admin or member role
text_ref: REQ-papra-invite-cannot-create-owner
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#invite-cannot-create-owner'
  recorded_at: '2026-11-25T19:26:25.180Z'
id: FACT-papra-organizations-organization-assignable-roles
type: fact
---
Invitations and role changes can only grant the admin or member role.

Modeled from REQ-papra-invite-cannot-create-owner so the claim can be checked for contradictions.
