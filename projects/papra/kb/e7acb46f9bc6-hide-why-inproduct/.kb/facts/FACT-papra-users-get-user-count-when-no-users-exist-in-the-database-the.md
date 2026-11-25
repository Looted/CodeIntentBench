---
title: users.get_user_count when_no_users_exist_in_the_database_the = True
status: active
fact_kind: property_value
subject_key: users.get_user_count
property_key: when_no_users_exist_in_the_database_the
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-62A8D924B34F7B46
claim_text: When no users exist in the database, the count is zero
text_ref: REQ-papra-users-no-users-exist-in-database-count-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1857'
  recorded_at: '2026-08-01T08:23:15.000Z'
id: FACT-papra-users-get-user-count-when-no-users-exist-in-the-database-the
type: fact
---
When no users exist in the database, the count is zero.

Modeled from REQ-papra-users-no-users-exist-in-database-count-is so the claim can be checked for contradictions.
