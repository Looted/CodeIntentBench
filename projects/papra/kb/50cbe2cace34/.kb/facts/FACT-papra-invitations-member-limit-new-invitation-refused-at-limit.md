---
title: invitations.member_limit new_invitation_refused_at_limit = True
status: active
fact_kind: property_value
subject_key: invitations.member_limit
property_key: new_invitation_refused_at_limit
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-47AC378BA07E984B
claim_text: a new invitation is refused when current members plus pending invitations already reach the plan limit
text_ref: REQ-papra-member-limit-counts-pending-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-limit'
  recorded_at: '2026-11-15T23:00:27.635Z'
id: FACT-papra-invitations-member-limit-new-invitation-refused-at-limit
type: fact
---
A new invitation is refused when current members plus pending invitations already reach the plan limit.

Modeled from REQ-papra-member-limit-counts-pending-invitations so the claim can be checked for contradictions.
