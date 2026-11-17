---
title: invitations.member_limit counts_stale_pending_invitations = False
status: active
fact_kind: property_value
subject_key: invitations.member_limit
property_key: counts_stale_pending_invitations
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-88FD3D18356B872C
claim_text: pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity
text_ref: REQ-papra-former-members-can-be-reinvited
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1534'
  recorded_at: '2026-11-16T13:15:12.812Z'
id: FACT-papra-invitations-member-limit-counts-stale-pending-invitations
type: fact
---
Pending invitations past their expiry date are marked expired before the checks, so they stop consuming organization capacity.

Modeled from REQ-papra-former-members-can-be-reinvited so the claim can be checked for contradictions.
