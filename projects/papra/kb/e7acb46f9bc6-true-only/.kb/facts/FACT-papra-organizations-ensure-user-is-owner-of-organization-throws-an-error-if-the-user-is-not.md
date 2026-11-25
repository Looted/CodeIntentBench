---
title: organizations.ensure_user_is_owner_of_organization throws_an_error_if_the_user_is_not = True
status: active
fact_kind: property_value
subject_key: organizations.ensure_user_is_owner_of_organization
property_key: throws_an_error_if_the_user_is_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-96A1533519F54CD8
claim_text: Throws an error if the user is not the owner of the organization
text_ref: REQ-papra-organizations-throws-error-if-user-is-not-owner
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1622'
  recorded_at: '2025-03-06T13:22:10.000Z'
id: FACT-papra-organizations-ensure-user-is-owner-of-organization-throws-an-error-if-the-user-is-not
type: fact
---
Throws an error if the user is not the owner of the organization.

Modeled from REQ-papra-organizations-throws-error-if-user-is-not-owner so the claim can be checked for contradictions.
