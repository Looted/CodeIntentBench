---
title: invitations.invitation pending_resendable = False
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: pending_resendable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-26C07D3ECB519889
claim_text: Pending invitations cannot be resent
text_ref: REQ-papra-resend-only-inactive-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#resend-only-inactive-invitations'
  recorded_at: '2026-11-16T13:16:12.731Z'
id: FACT-papra-invitations-invitation-pending-resendable
type: fact
---
Pending invitations cannot be resent.

Modeled from REQ-papra-resend-only-inactive-invitations so the claim can be checked for contradictions.
