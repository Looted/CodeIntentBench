---
title: invitations.invitation allowed_inviter_roles = owner_or_admin
status: active
fact_kind: property_value
subject_key: invitations.invitation
property_key: allowed_inviter_roles
operator: eq
value_type: string
value_string: owner_or_admin
claim_key: CLAIM-6F639F67898E07A1
claim_text: Only privileged members of an organization (owner or admin) can invite users to join it
text_ref: REQ-only-privileged-members-of-an-organization-FCDD9696
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Organization invitations specs: invtations.specs.md#who-invites'
  recorded_at: '2026-11-15T21:45:49.370Z'
id: FACT-papra-invitations-invitation-allowed-inviter-roles
type: fact
---
Only privileged members of an organization (owner or admin) can invite users to join it.

Modeled from REQ-only-privileged-members-of-an-organization-FCDD9696 so the claim can be checked for contradictions.
