---
title: users.list_users when_searching_with_an_empty_string_all_users = True
status: active
fact_kind: property_value
subject_key: users.list_users
property_key: when_searching_with_an_empty_string_all_users
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-67045AE76766F988
claim_text: When searching with an empty string, all users are returned
text_ref: REQ-papra-users-searching-with-empty-string-all-users-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1869'
  recorded_at: '2025-12-01T14:31:07.000Z'
id: FACT-papra-users-list-users-when-searching-with-an-empty-string-all-users
type: fact
---
When searching with an empty string, all users are returned.

Modeled from REQ-papra-users-searching-with-empty-string-all-users-are so the claim can be checked for contradictions.
