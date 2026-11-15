---
title: organization.soft_delete removes_members_and_pending_invitations = True
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: removes_members_and_pending_invitations
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9BA71E79736927F6
claim_text: 'Deleting an organization is a soft delete: members and pending invitations are removed'
text_ref: REQ-deleting-an-organization-is-a-soft-delete--58DE105C
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#soft-delete'
  recorded_at: '2026-11-15T21:50:11.529Z'
id: FACT-papra-organization-soft-delete-removes-members-and-pending-invitations
type: fact
---
Deleting an organization is a soft delete: members and pending invitations are removed.

Modeled from REQ-deleting-an-organization-is-a-soft-delete--58DE105C so the claim can be checked for contradictions.
