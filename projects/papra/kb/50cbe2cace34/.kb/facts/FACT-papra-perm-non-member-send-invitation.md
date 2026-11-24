---
title: 'non_member send invitation: deny'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - non_member
  - send
  - invitation
  - deny
polarity: assert
canonical_key: permission_rule(non_member,send,invitation,deny)
claim_key: CLAIM-95343250B31E5D3D
claim_text: non-members are rejected outright
text_ref: REQ-papra-only-owners-and-admins-invite
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owners-and-admins-invite'
  recorded_at: '2026-11-16T10:30:14.242Z'
id: FACT-papra-perm-non-member-send-invitation
type: fact
---
Non-members are rejected outright.

Modeled from REQ-papra-only-owners-and-admins-invite so the claim can be checked for contradictions.
