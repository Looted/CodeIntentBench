---
title: 'organization_admin_or_member delete organization: deny'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - organization_admin_or_member
  - delete
  - organization
  - deny
polarity: assert
canonical_key: permission_rule(organization_admin_or_member,delete,organization,deny)
claim_key: CLAIM-EDE700438E1D8C87
claim_text: admins and members cannot
text_ref: REQ-only-the-organization-owner-can-delete-an--8207027D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#who-can-delete'
  recorded_at: '2026-11-15T21:50:52.073Z'
id: FACT-papra-perm-organization-admin-or-member-delete-organization
type: fact
---
Admins and members cannot.

Modeled from REQ-only-the-organization-owner-can-delete-an--8207027D so the claim can be checked for contradictions.
