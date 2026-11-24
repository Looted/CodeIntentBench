---
title: auth.first_user_admin max_users_granted = 1
status: active
fact_kind: property_value
subject_key: auth.first_user_admin
property_key: max_users_granted
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-A57DA5CD89B51C1F
claim_text: at most one user receives it even when several register at the same time
text_ref: REQ-on-self-hosted-instances-the-first-registe-1C953705
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 03-guides/07-roles-and-permissions.mdx#first-user-admin'
  recorded_at: '2026-11-15T21:45:47.503Z'
id: FACT-papra-auth-first-user-admin-max-users-granted
type: fact
---
At most one user receives it even when several register at the same time.

Modeled from REQ-on-self-hosted-instances-the-first-registe-1C953705 so the claim can be checked for contradictions.
