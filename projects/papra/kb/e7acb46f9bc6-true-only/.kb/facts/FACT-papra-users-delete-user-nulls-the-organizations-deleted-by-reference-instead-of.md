---
title: users.delete_user nulls_the_organizations_deleted_by_reference_instead_of = True
status: active
fact_kind: property_value
subject_key: users.delete_user
property_key: nulls_the_organizations_deleted_by_reference_instead_of
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0746B8637A0EDC0E
claim_text: Nulls the organizations.deleted_by reference instead of blocking the delete
text_ref: REQ-papra-users-nulls-organizations-deleted-by-reference-instead-of
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1872'
  recorded_at: '2025-03-11T08:38:24.000Z'
id: FACT-papra-users-delete-user-nulls-the-organizations-deleted-by-reference-instead-of
type: fact
---
Nulls the organizations.deleted_by reference instead of blocking the delete.

Modeled from REQ-papra-users-nulls-organizations-deleted-by-reference-instead-of so the claim can be checked for contradictions.
