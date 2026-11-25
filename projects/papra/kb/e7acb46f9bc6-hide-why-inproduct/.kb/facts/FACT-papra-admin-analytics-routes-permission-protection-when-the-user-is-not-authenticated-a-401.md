---
title: admin.analytics_routes_permission_protection when_the_user_is_not_authenticated_a_401 = True
status: active
fact_kind: property_value
subject_key: admin.analytics_routes_permission_protection
property_key: when_the_user_is_not_authenticated_a_401
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8DF9E4FAFE12B003
claim_text: When the user is not authenticated, a 401 error is returned
text_ref: REQ-papra-admin-user-is-not-authenticated-401-error-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-407'
  recorded_at: '2025-08-17T14:18:16.000Z'
id: FACT-papra-admin-analytics-routes-permission-protection-when-the-user-is-not-authenticated-a-401
type: fact
---
When the user is not authenticated, a 401 error is returned.

Modeled from REQ-papra-admin-user-is-not-authenticated-401-error-is so the claim can be checked for contradictions.
