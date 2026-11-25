---
title: admin.analytics_routes_permission_protection when_the_user_does_not_have_the_view = True
status: active
fact_kind: property_value
subject_key: admin.analytics_routes_permission_protection
property_key: when_the_user_does_not_have_the_view
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8721E2914201AAD5
claim_text: When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned
text_ref: REQ-papra-admin-user-does-not-have-view-analytics-permission
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-403'
  recorded_at: '2025-03-16T14:03:02.000Z'
id: FACT-papra-admin-analytics-routes-permission-protection-when-the-user-does-not-have-the-view
type: fact
---
When the user does not have the VIEW_ANALYTICS permission, a 401 error is returned.

Modeled from REQ-papra-admin-user-does-not-have-view-analytics-permission so the claim can be checked for contradictions.
