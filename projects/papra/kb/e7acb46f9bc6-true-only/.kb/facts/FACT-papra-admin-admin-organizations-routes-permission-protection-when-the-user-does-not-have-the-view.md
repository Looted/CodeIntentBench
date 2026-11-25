---
title: admin.admin_organizations_routes_permission_protection when_the_user_does_not_have_the_view = True
status: active
fact_kind: property_value
subject_key: admin.admin_organizations_routes_permission_protection
property_key: when_the_user_does_not_have_the_view
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8DE93BB217401331
claim_text: When the user does not have the VIEW_USERS permission, a 401 error is returned
text_ref: REQ-papra-admin-user-does-not-have-view-users-permission
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-414'
  recorded_at: '2026-06-23T08:08:50.000Z'
id: FACT-papra-admin-admin-organizations-routes-permission-protection-when-the-user-does-not-have-the-view
type: fact
---
When the user does not have the VIEW_USERS permission, a 401 error is returned.

Modeled from REQ-papra-admin-user-does-not-have-view-users-permission so the claim can be checked for contradictions.
