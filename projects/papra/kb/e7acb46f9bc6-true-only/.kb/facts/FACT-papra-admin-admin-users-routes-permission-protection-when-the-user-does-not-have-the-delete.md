---
title: admin.admin_users_routes_permission_protection when_the_user_does_not_have_the_delete = True
status: active
fact_kind: property_value
subject_key: admin.admin_users_routes_permission_protection
property_key: when_the_user_does_not_have_the_delete
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-BBD0431BFF41198B
claim_text: When the user does not have the DELETE_USERS permission, a 401 error is returned
text_ref: REQ-papra-admin-user-does-not-have-delete-users-permission
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-438'
  recorded_at: '2025-06-19T13:56:18.000Z'
id: FACT-papra-admin-admin-users-routes-permission-protection-when-the-user-does-not-have-the-delete
type: fact
---
When the user does not have the DELETE_USERS permission, a 401 error is returned.

Modeled from REQ-papra-admin-user-does-not-have-delete-users-permission so the claim can be checked for contradictions.
