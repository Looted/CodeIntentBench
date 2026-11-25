---
title: organizations.member_removal allowed_roles = owner_or_admin
status: active
fact_kind: property_value
subject_key: organizations.member_removal
property_key: allowed_roles
operator: eq
value_type: string
value_string: owner_or_admin
claim_key: CLAIM-8F378B8E5D3F3770
claim_text: Only owners and admins can remove members from an organization
text_ref: REQ-papra-owner-cannot-be-removed
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.models.test.ts#owner-cannot-be-removed'
  recorded_at: '2026-11-25T19:26:37.863Z'
id: FACT-papra-organizations-member-removal-allowed-roles
type: fact
---
Only owners and admins can remove members from an organization.

Modeled from REQ-papra-owner-cannot-be-removed so the claim can be checked for contradictions.
