---
title: roles.first_user_admin_assignment the_second_user_does_not_receive_the_admin = True
status: active
fact_kind: property_value
subject_key: roles.first_user_admin_assignment
property_key: the_second_user_does_not_receive_the_admin
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-913FBD9DF2E7746E
claim_text: When the feature is enabled, the second user does not receive the admin role
text_ref: REQ-papra-roles-second-user-does-not-receive-admin-role
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1702'
  recorded_at: '2026-09-01T16:43:01.000Z'
id: FACT-papra-roles-first-user-admin-assignment-the-second-user-does-not-receive-the-admin
type: fact
---
When the feature is enabled, the second user does not receive the admin role.

Modeled from REQ-papra-roles-second-user-does-not-receive-admin-role so the claim can be checked for contradictions.
