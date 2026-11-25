---
title: invitations.invitation accepted_resendable = False
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: accepted_resendable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-942C51878E315FC7
claim_text: accepted invitations are historical records that can never be resent
text_ref: REQ-papra-resend-only-inactive-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#resend-only-inactive-invitations'
  recorded_at: '2026-11-16T13:16:13.417Z'
id: FACT-papra-invitations-invitation-accepted-resendable
type: fact
---
Accepted invitations are historical records that can never be resent.

Modeled from REQ-papra-resend-only-inactive-invitations so the claim can be checked for contradictions.
