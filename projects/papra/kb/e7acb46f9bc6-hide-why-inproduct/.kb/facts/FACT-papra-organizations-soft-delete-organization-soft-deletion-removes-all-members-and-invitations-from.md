---
title: organizations.soft_delete_organization soft_deletion_removes_all_members_and_invitations_from = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: soft_deletion_removes_all_members_and_invitations_from
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CB9723D43DDB909A
claim_text: Soft deletion removes all members and invitations from the organization
text_ref: REQ-papra-organizations-soft-deletion-removes-all-members-and-invitations
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1606'
  recorded_at: '2026-01-11T15:26:32.000Z'
id: FACT-papra-organizations-soft-delete-organization-soft-deletion-removes-all-members-and-invitations-from
type: fact
---
Soft deletion removes all members and invitations from the organization.

Modeled from REQ-papra-organizations-soft-deletion-removes-all-members-and-invitations so the claim can be checked for contradictions.
