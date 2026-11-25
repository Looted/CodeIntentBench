---
title: admin.admin_users_routes_permission_protection when_the_user_has_the_view_users_permission = True
status: active
fact_kind: property_value
subject_key: admin.admin_users_routes_permission_protection
property_key: when_the_user_has_the_view_users_permission
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2C6A0352F4B1A953
claim_text: When the user has the VIEW_USERS permission, the request succeeds and returns user details
text_ref: REQ-papra-admin-user-has-view-users-permission-request-succeeds-3
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-442'
  recorded_at: '2025-06-02T12:01:57.000Z'
id: FACT-papra-admin-admin-users-routes-permission-protection-when-the-user-has-the-view-users-permission
type: fact
---
When the user has the VIEW_USERS permission, the request succeeds and returns user details.

Modeled from REQ-papra-admin-user-has-view-users-permission-request-succeeds-3 so the claim can be checked for contradictions.
