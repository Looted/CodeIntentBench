---
title: roles.get_permissions_for_roles given_a_list_of_user_roles_it_returns = True
status: active
fact_kind: property_value
subject_key: roles.get_permissions_for_roles
property_key: given_a_list_of_user_roles_it_returns
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B4CE458DC422BB5F
claim_text: Given a list of user roles, it returns the deduplicated list of permissions for those roles
text_ref: REQ-papra-roles-list-of-user-roles-it-returns-deduplicated
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1705'
  recorded_at: '2025-12-09T14:32:25.000Z'
id: FACT-papra-roles-get-permissions-for-roles-given-a-list-of-user-roles-it-returns
type: fact
---
Given a list of user roles, it returns the deduplicated list of permissions for those roles.

Modeled from REQ-papra-roles-list-of-user-roles-it-returns-deduplicated so the claim can be checked for contradictions.
