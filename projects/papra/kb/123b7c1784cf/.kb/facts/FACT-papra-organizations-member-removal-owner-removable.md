---
title: organizations.member_removal owner_removable = False
status: active
fact_kind: property_value
subject_key: organizations.member_removal
property_key: owner_removable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-11E131C2DF5FA613
claim_text: the owner can never be removed by anyone, including themselves
text_ref: REQ-papra-owner-cannot-be-removed
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.models.test.ts#owner-cannot-be-removed'
  recorded_at: '2026-11-25T19:26:38.575Z'
id: FACT-papra-organizations-member-removal-owner-removable
type: fact
---
The owner can never be removed by anyone, including themselves.

Modeled from REQ-papra-owner-cannot-be-removed so the claim can be checked for contradictions.
