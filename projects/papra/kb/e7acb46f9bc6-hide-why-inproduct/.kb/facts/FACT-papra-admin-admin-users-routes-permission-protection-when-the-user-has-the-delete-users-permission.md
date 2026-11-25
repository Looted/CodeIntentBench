---
title: admin.admin_users_routes_permission_protection when_the_user_has_the_delete_users_permission = True
status: active
fact_kind: property_value
subject_key: admin.admin_users_routes_permission_protection
property_key: when_the_user_has_the_delete_users_permission
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-3FCE240C4238E928
claim_text: When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted
text_ref: REQ-papra-admin-user-has-delete-users-permission-and-target
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-440'
  recorded_at: '2025-06-08T12:27:14.000Z'
id: FACT-papra-admin-admin-users-routes-permission-protection-when-the-user-has-the-delete-users-permission
type: fact
---
When the user has the DELETE_USERS permission and the target has no owned organizations, the user is deleted.

Modeled from REQ-papra-admin-user-has-delete-users-permission-and-target so the claim can be checked for contradictions.
