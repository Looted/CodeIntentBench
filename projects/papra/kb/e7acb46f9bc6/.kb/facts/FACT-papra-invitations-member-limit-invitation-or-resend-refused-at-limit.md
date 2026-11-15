---
title: invitations.member_limit invitation_or_resend_refused_at_limit = True
status: active
fact_kind: property_value
subject_key: invitations.member_limit
property_key: invitation_or_resend_refused_at_limit
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0F4F1E5BD5A87E2F
claim_text: a new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit
text_ref: REQ-papra-member-cap-counts-pending-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-cap-counts-pending-invitations'
  recorded_at: '2026-11-15T22:57:52.326Z'
id: FACT-papra-invitations-member-limit-invitation-or-resend-refused-at-limit
type: fact
---
A new invitation (or a resend) is refused when current members plus pending invitations already reach the plan limit.

Modeled from REQ-papra-member-cap-counts-pending-invitations so the claim can be checked for contradictions.
