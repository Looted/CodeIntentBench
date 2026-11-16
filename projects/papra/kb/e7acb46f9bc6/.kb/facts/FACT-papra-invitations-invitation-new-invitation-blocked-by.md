---
title: invitations.invitation new_invitation_blocked_by = current_membership_or_pending_invitation
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: new_invitation_blocked_by
operator: eq
value_type: string
value_string: current_membership_or_pending_invitation
claim_key: CLAIM-FAE3E6873AD10C51
claim_text: only a current membership or a pending invitation blocks a new invitation
text_ref: REQ-papra-former-members-can-be-reinvited
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1534'
  recorded_at: '2026-11-16T10:18:02.631Z'
id: FACT-papra-invitations-invitation-new-invitation-blocked-by
type: fact
---
Only a current membership or a pending invitation blocks a new invitation.

Modeled from REQ-papra-former-members-can-be-reinvited so the claim can be checked for contradictions.
