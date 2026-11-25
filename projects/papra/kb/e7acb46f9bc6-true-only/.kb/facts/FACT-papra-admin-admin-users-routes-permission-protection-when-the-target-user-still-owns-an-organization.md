---
title: admin.admin_users_routes_permission_protection when_the_target_user_still_owns_an_organization = True
status: active
fact_kind: property_value
subject_key: admin.admin_users_routes_permission_protection
property_key: when_the_target_user_still_owns_an_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B80D0AE8EFB9F39E
claim_text: When the target user still owns an organization, a 400 error is returned and the user is not deleted
text_ref: REQ-papra-admin-target-user-still-owns-organization-400-error
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-436'
  recorded_at: '2026-09-24T13:53:33.000Z'
id: FACT-papra-admin-admin-users-routes-permission-protection-when-the-target-user-still-owns-an-organization
type: fact
---
When the target user still owns an organization, a 400 error is returned and the user is not deleted.

Modeled from REQ-papra-admin-target-user-still-owns-organization-400-error so the claim can be checked for contradictions.
