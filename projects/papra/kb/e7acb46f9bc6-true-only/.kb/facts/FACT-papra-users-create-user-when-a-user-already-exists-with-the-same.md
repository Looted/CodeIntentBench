---
title: users.create_user when_a_user_already_exists_with_the_same = True
status: active
fact_kind: property_value
subject_key: users.create_user
property_key: when_a_user_already_exists_with_the_same
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C8F3EE382105B187
claim_text: When a user already exists with the same email, an error is thrown
text_ref: REQ-papra-users-user-already-exists-with-same-email-error
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1850'
  recorded_at: '2026-03-10T12:52:43.000Z'
id: FACT-papra-users-create-user-when-a-user-already-exists-with-the-same
type: fact
---
When a user already exists with the same email, an error is thrown.

Modeled from REQ-papra-users-user-already-exists-with-same-email-error so the claim can be checked for contradictions.
