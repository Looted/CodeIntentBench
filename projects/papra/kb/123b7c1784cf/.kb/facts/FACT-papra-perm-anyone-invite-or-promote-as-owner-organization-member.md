---
title: 'anyone invite_or_promote_as_owner organization_member: deny'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - anyone
  - invite_or_promote_as_owner
  - organization_member
  - deny
polarity: assert
canonical_key: permission_rule(anyone,invite_or_promote_as_owner,organization_member,deny)
claim_key: CLAIM-199F0D948B42579D
claim_text: nobody can be invited or promoted as owner
text_ref: REQ-papra-invite-cannot-create-owner
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#invite-cannot-create-owner'
  recorded_at: '2026-11-25T19:26:25.959Z'
id: FACT-papra-perm-anyone-invite-or-promote-as-owner-organization-member
type: fact
---
Nobody can be invited or promoted as owner.

Modeled from REQ-papra-invite-cannot-create-owner so the claim can be checked for contradictions.
