---
title: invitations.member_limit pending_invitations_count_toward_maximum = True
status: active
fact_kind: property_value
subject_key: invitations.member_limit
property_key: pending_invitations_count_toward_maximum
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DD6D078452441638
claim_text: Pending invitations count toward that maximum
text_ref: REQ-papra-member-cap-counts-pending-invitations
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#member-cap-counts-pending-invitations'
  recorded_at: '2026-11-16T13:15:53.122Z'
id: FACT-papra-invitations-member-limit-pending-invitations-count-toward-maximum
type: fact
---
Pending invitations count toward that maximum.

Modeled from REQ-papra-member-cap-counts-pending-invitations so the claim can be checked for contradictions.
