---
title: users.list_users when_no_users_exist_an_empty_list_is = True
status: active
fact_kind: property_value
subject_key: users.list_users
property_key: when_no_users_exist_an_empty_list_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8482ADE8D1C45E44
claim_text: When no users exist, an empty list is returned
text_ref: REQ-papra-users-no-users-exist-empty-list-is-returned
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1861'
  recorded_at: '2026-02-20T15:19:47.000Z'
id: FACT-papra-users-list-users-when-no-users-exist-an-empty-list-is
type: fact
---
When no users exist, an empty list is returned.

Modeled from REQ-papra-users-no-users-exist-empty-list-is-returned so the claim can be checked for contradictions.
