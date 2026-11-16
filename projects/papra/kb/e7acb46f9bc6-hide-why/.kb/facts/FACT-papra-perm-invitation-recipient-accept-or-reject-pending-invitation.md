---
title: 'invitation_recipient accept_or_reject pending_invitation: allow'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - invitation_recipient
  - accept_or_reject
  - pending_invitation
  - allow
polarity: assert
canonical_key: permission_rule(invitation_recipient,accept_or_reject,pending_invitation,allow)
claim_key: CLAIM-18331CDBC62D8022
claim_text: accepted or rejected by its recipient
text_ref: REQ-a-pending-invitation-can-be-cancelled-by-a-FE4C0162
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Organization invitations specs: invtations.specs.md#cancel-reject'
  recorded_at: '2026-11-15T21:44:47.435Z'
id: FACT-papra-perm-invitation-recipient-accept-or-reject-pending-invitation
type: fact
---
Accepted or rejected by its recipient.

Modeled from REQ-a-pending-invitation-can-be-cancelled-by-a-FE4C0162 so the claim can be checked for contradictions.
