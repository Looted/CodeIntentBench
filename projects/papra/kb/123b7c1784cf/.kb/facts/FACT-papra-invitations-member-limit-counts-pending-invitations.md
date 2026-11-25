---
title: invitations.member_limit counts_pending_invitations = True
status: active
fact_kind: property_value
subject_key: invitations.member_limit
property_key: counts_pending_invitations
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-EC6DA35B00F3F23E
claim_text: pending invitations count toward it
text_ref: REQ-papra-member-limit-counts-pending-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-limit'
  recorded_at: '2026-11-25T19:26:02.887Z'
id: FACT-papra-invitations-member-limit-counts-pending-invitations
type: fact
---
Pending invitations count toward it.

Modeled from REQ-papra-member-limit-counts-pending-invitations so the claim can be checked for contradictions.
