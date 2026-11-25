---
title: 'admins_and_members delete organization: deny'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - admins_and_members
  - delete
  - organization
  - deny
polarity: assert
canonical_key: permission_rule(admins_and_members,delete,organization,deny)
claim_key: CLAIM-C55AC6F16857440B
claim_text: Admins and members cannot, even though admins can manage everything else
text_ref: REQ-papra-only-owner-deletes-organization
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owner-deletes-organization'
  recorded_at: '2026-11-25T19:26:29.907Z'
id: FACT-papra-perm-admins-and-members-delete-organization
type: fact
---
Admins and members cannot, even though admins can manage everything else.

Modeled from REQ-papra-only-owner-deletes-organization so the claim can be checked for contradictions.
