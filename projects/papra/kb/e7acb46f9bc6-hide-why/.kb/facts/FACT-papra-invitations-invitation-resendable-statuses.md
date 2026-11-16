---
title: invitations.invitation resendable_statuses = expired_cancelled_rejected
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: resendable_statuses
operator: eq
value_type: string
value_string: expired_cancelled_rejected
claim_key: CLAIM-ADF33B013D75E721
claim_text: An invitation can be resent only when it is expired, cancelled or rejected
text_ref: REQ-papra-resend-only-inactive-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#resend-only-inactive-invitations'
  recorded_at: '2026-11-16T13:16:11.989Z'
id: FACT-papra-invitations-invitation-resendable-statuses
type: fact
---
An invitation can be resent only when it is expired, cancelled or rejected.

Modeled from REQ-papra-resend-only-inactive-invitations so the claim can be checked for contradictions.
