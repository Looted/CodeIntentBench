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
text_ref: REQ-papra-only-owner-deletes-organization
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owner-deletes-organization'
  recorded_at: '2026-11-25T19:26:28.965Z'
id: FACT-papra-perm-organization-owner-delete-organization
type: fact
---
Only the organization owner can delete an organization.

Modeled from REQ-papra-only-owner-deletes-organization so the claim can be checked for contradictions.
