---
title: users.delete_user throws_an_error_when_the_user_still_owns = True
status: active
fact_kind: property_value
subject_key: users.delete_user
property_key: throws_an_error_when_the_user_still_owns
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-106104BB03B88D91
claim_text: Throws an error when the user still owns an organization
text_ref: REQ-papra-users-throws-error-when-user-still-owns-organization
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1875'
  recorded_at: '2025-09-26T10:07:19.000Z'
id: FACT-papra-users-delete-user-throws-an-error-when-the-user-still-owns
type: fact
---
Throws an error when the user still owns an organization.

Modeled from REQ-papra-users-throws-error-when-user-still-owns-organization so the claim can be checked for contradictions.
