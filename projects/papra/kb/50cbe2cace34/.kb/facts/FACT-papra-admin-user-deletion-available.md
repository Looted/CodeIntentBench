---
title: admin.user_deletion available = True
status: active
fact_kind: property_value
subject_key: admin.user_deletion
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7EAA6680E2EBD62C
claim_text: A platform admin can delete a user from the admin user details page
text_ref: REQ-papra-admin-can-delete-users
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.5.0 changelog, #1109: Added the possibility to delete a user in the admin user det'
  recorded_at: '2026-11-16T10:36:34.176Z'
id: FACT-papra-admin-user-deletion-available
type: fact
---
A platform admin can delete a user from the admin user details page.

Modeled from REQ-papra-admin-can-delete-users so the claim can be checked for contradictions.
