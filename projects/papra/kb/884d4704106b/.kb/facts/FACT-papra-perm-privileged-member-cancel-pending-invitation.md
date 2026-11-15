---
title: 'privileged_member cancel pending_invitation: allow'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - privileged_member
  - cancel
  - pending_invitation
  - allow
polarity: assert
canonical_key: permission_rule(privileged_member,cancel,pending_invitation,allow)
claim_key: CLAIM-FAF30A52B50B5864
claim_text: A pending invitation can be cancelled by a privileged member of the organization
text_ref: REQ-a-pending-invitation-can-be-cancelled-by-a-FE4C0162
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Organization invitations specs: invtations.specs.md#cancel-reject'
  recorded_at: '2026-11-15T21:44:46.796Z'
id: FACT-papra-perm-privileged-member-cancel-pending-invitation
type: fact
---
A pending invitation can be cancelled by a privileged member of the organization.

Modeled from REQ-a-pending-invitation-can-be-cancelled-by-a-FE4C0162 so the claim can be checked for contradictions.
