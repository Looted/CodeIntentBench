---
title: organizations.invite_member_to_organization expired_cancelled_and_rejected_invitations_do_not_prevent = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: expired_cancelled_and_rejected_invitations_do_not_prevent
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-56DC415E828F46AE
claim_text: Expired, cancelled and rejected invitations do not prevent a fresh invitation
text_ref: REQ-papra-organizations-expired-cancelled-and-rejected-invitations-do-not
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1566'
  recorded_at: '2026-07-11T12:04:26.000Z'
id: FACT-papra-organizations-invite-member-to-organization-expired-cancelled-and-rejected-invitations-do-not-prevent
type: fact
---
Expired, cancelled and rejected invitations do not prevent a fresh invitation.

Modeled from REQ-papra-organizations-expired-cancelled-and-rejected-invitations-do-not so the claim can be checked for contradictions.
