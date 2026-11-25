---
title: admin.admin_organizations_routes_permission_protection when_the_user_has_the_view_users_permission_2 = True
status: active
fact_kind: property_value
subject_key: admin.admin_organizations_routes_permission_protection
property_key: when_the_user_has_the_view_users_permission_2
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-680BFE27EE598243
claim_text: When the user has the VIEW_USERS permission, the request succeeds and returns webhooks
text_ref: REQ-papra-admin-user-has-view-users-permission-request-succeeds-2
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-419'
  recorded_at: '2026-03-21T12:50:04.000Z'
id: FACT-papra-admin-admin-organizations-routes-permission-protection-when-the-user-has-the-view-users-permission-2
type: fact
---
When the user has the VIEW_USERS permission, the request succeeds and returns webhooks.

Modeled from REQ-papra-admin-user-has-view-users-permission-request-succeeds-2 so the claim can be checked for contradictions.
