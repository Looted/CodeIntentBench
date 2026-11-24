---
title: auth.first_user_admin enabled_by_default = True
status: active
fact_kind: property_value
subject_key: auth.first_user_admin
property_key: enabled_by_default
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A9A07484E75CD7EC
claim_text: On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default)
text_ref: REQ-on-self-hosted-instances-the-first-registe-1C953705
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/07-roles-and-permissions.mdx#first-user-admin'
  recorded_at: '2026-11-15T21:45:46.869Z'
id: FACT-papra-auth-first-user-admin-enabled-by-default
type: fact
---
On self-hosted instances the first registered user receives the platform admin role (AUTH_FIRST_USER_AS_ADMIN, enabled by default).

Modeled from REQ-on-self-hosted-instances-the-first-registe-1C953705 so the claim can be checked for contradictions.
