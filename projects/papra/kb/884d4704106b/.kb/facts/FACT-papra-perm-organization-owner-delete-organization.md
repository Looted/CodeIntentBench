---
title: 'organization_owner delete organization: allow'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - organization_owner
  - delete
  - organization
  - allow
polarity: assert
canonical_key: permission_rule(organization_owner,delete,organization,allow)
claim_key: CLAIM-6D1A016ED2CEAD61
claim_text: Only the organization owner can delete an organization
text_ref: REQ-only-the-organization-owner-can-delete-an--8207027D
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#who-can-delete'
  recorded_at: '2026-11-15T21:45:55.035Z'
id: FACT-papra-perm-organization-owner-delete-organization
type: fact
---
Only the organization owner can delete an organization.

Modeled from REQ-only-the-organization-owner-can-delete-an--8207027D so the claim can be checked for contradictions.
