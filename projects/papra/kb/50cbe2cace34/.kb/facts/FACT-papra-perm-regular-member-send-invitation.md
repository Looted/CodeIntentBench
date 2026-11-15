---
title: 'regular_member send invitation: deny'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - regular_member
  - send
  - invitation
  - deny
polarity: assert
canonical_key: permission_rule(regular_member,send,invitation,deny)
claim_key: CLAIM-2448090CE2CE252C
claim_text: Regular members cannot send invitations
text_ref: REQ-papra-only-owners-and-admins-invite
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owners-and-admins-invite'
  recorded_at: '2026-11-15T23:00:58.781Z'
id: FACT-papra-perm-regular-member-send-invitation
type: fact
---
Regular members cannot send invitations.

Modeled from REQ-papra-only-owners-and-admins-invite so the claim can be checked for contradictions.
