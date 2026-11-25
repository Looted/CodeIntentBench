---
title: users.delete_user deleting_an_user_cascades_the_authentication_related_data = True
status: active
fact_kind: property_value
subject_key: users.delete_user
property_key: deleting_an_user_cascades_the_authentication_related_data
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EC0359F9AB47DA60
claim_text: Deleting an user cascades the authentication related data, accounts, sessions, 2fa
text_ref: REQ-papra-users-deleting-user-cascades-authentication-related-data-accounts
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1871'
  recorded_at: '2026-07-10T10:55:39.000Z'
id: FACT-papra-users-delete-user-deleting-an-user-cascades-the-authentication-related-data
type: fact
---
Deleting an user cascades the authentication related data, accounts, sessions, 2fa.

Modeled from REQ-papra-users-deleting-user-cascades-authentication-related-data-accounts so the claim can be checked for contradictions.
