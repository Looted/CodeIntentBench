---
title: organizations.remove_member_from_organization one_cannot_remove_a_user_from_another_organization = True
status: active
fact_kind: property_value
subject_key: organizations.remove_member_from_organization
property_key: one_cannot_remove_a_user_from_another_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-15CCB9D6E72BBC48
claim_text: One cannot remove a user from another organization
text_ref: REQ-papra-organizations-one-cannot-remove-user-from-another-organization
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1582'
  recorded_at: '2025-04-26T08:32:54.000Z'
id: FACT-papra-organizations-remove-member-from-organization-one-cannot-remove-a-user-from-another-organization
type: fact
---
One cannot remove a user from another organization.

Modeled from REQ-papra-organizations-one-cannot-remove-user-from-another-organization so the claim can be checked for contradictions.
