---
title: admin.admin_organizations_routes_permission_protection when_the_user_has_the_view_users_permission = True
status: active
fact_kind: property_value
subject_key: admin.admin_organizations_routes_permission_protection
property_key: when_the_user_has_the_view_users_permission
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D5B56F8DF5BC2450
claim_text: When the user has the VIEW_USERS permission, the request succeeds and returns intake emails
text_ref: REQ-papra-admin-user-has-view-users-permission-request-succeeds
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-417'
  recorded_at: '2025-08-03T15:15:18.000Z'
id: FACT-papra-admin-admin-organizations-routes-permission-protection-when-the-user-has-the-view-users-permission
type: fact
---
When the user has the VIEW_USERS permission, the request succeeds and returns intake emails.

Modeled from REQ-papra-admin-user-has-view-users-permission-request-succeeds so the claim can be checked for contradictions.
