---
title: admin.admin_users_routes_permission_protection when_the_admin_tries_to_delete_their_own = True
status: active
fact_kind: property_value
subject_key: admin.admin_users_routes_permission_protection
property_key: when_the_admin_tries_to_delete_their_own
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-23525137190DD95E
claim_text: When the admin tries to delete their own account, a 400 error is returned
text_ref: REQ-papra-admin-admin-tries-to-delete-their-own-account
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-434'
  recorded_at: '2026-09-01T08:00:00.000Z'
id: FACT-papra-admin-admin-users-routes-permission-protection-when-the-admin-tries-to-delete-their-own
type: fact
---
When the admin tries to delete their own account, a 400 error is returned.

Modeled from REQ-papra-admin-admin-tries-to-delete-their-own-account so the claim can be checked for contradictions.
