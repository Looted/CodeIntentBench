---
title: organizations.remove_member_from_organization a_member_not_admin_nor_owner_cannot_remove = True
status: active
fact_kind: property_value
subject_key: organizations.remove_member_from_organization
property_key: a_member_not_admin_nor_owner_cannot_remove
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-245B29DCAF0D0D8C
claim_text: A member (not admin nor owner) cannot remove anyone from the organization
text_ref: REQ-papra-organizations-member-not-admin-nor-owner-cannot-remove
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1526'
  recorded_at: '2026-08-17T11:05:06.000Z'
id: FACT-papra-organizations-remove-member-from-organization-a-member-not-admin-nor-owner-cannot-remove
type: fact
---
A member (not admin nor owner) cannot remove anyone from the organization.

Modeled from REQ-papra-organizations-member-not-admin-nor-owner-cannot-remove so the claim can be checked for contradictions.
