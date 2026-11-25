---
title: roles.first_user_admin_assignment if_the_first_user_already_has_an_admin = True
status: active
fact_kind: property_value
subject_key: roles.first_user_admin_assignment
property_key: if_the_first_user_already_has_an_admin
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CC45602151E89D8B
claim_text: When the feature is enabled, if the first user already has an admin role, it does not fail
text_ref: REQ-papra-roles-first-user-already-has-admin-role-it
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1696'
  recorded_at: '2026-06-22T14:58:46.000Z'
id: FACT-papra-roles-first-user-admin-assignment-if-the-first-user-already-has-an-admin
type: fact
---
When the feature is enabled, if the first user already has an admin role, it does not fail.

Modeled from REQ-papra-roles-first-user-already-has-admin-role-it so the claim can be checked for contradictions.
