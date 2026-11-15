---
title: invitations.invitation roles_allowed_to_invite_or_resend = owner_or_admin
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: roles_allowed_to_invite_or_resend
operator: eq
value_type: string
value_string: owner_or_admin
claim_key: CLAIM-F45C9325C6545BD7
claim_text: Only an organization's owner or admins can invite new members or resend an invitation
text_ref: REQ-papra-only-owners-and-admins-invite
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): organizations/organizations.usecases.test.ts#only-owners-and-admins-invite'
  recorded_at: '2026-11-15T22:57:58.106Z'
id: FACT-papra-invitations-invitation-roles-allowed-to-invite-or-resend
type: fact
---
Only an organization's owner or admins can invite new members or resend an invitation.

Modeled from REQ-papra-only-owners-and-admins-invite so the claim can be checked for contradictions.
