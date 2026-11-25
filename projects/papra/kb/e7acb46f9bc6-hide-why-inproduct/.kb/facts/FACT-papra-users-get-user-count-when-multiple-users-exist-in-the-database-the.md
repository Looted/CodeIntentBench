---
title: users.get_user_count when_multiple_users_exist_in_the_database_the = True
status: active
fact_kind: property_value
subject_key: users.get_user_count
property_key: when_multiple_users_exist_in_the_database_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-256D562AC0237478
claim_text: When multiple users exist in the database, the count reflects the total number of users
text_ref: REQ-papra-users-multiple-users-exist-in-database-count-reflects
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1853'
  recorded_at: '2025-03-14T10:41:04.000Z'
id: FACT-papra-users-get-user-count-when-multiple-users-exist-in-the-database-the
type: fact
---
When multiple users exist in the database, the count reflects the total number of users.

Modeled from REQ-papra-users-multiple-users-exist-in-database-count-reflects so the claim can be checked for contradictions.
