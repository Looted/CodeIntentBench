---
title: invitations.invitation former_member_can_be_reinvited = True
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: former_member_can_be_reinvited
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6CF9096FCB3F31A7
claim_text: A user who left or was removed from an organization can be invited again
text_ref: REQ-papra-former-members-can-be-reinvited
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra merged pull requests: #1534'
  recorded_at: '2026-11-16T13:15:10.243Z'
id: FACT-papra-invitations-invitation-former-member-can-be-reinvited
type: fact
---
A user who left or was removed from an organization can be invited again.

Modeled from REQ-papra-former-members-can-be-reinvited so the claim can be checked for contradictions.
