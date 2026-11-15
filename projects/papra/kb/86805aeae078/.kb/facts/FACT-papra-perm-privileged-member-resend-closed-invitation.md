---
title: 'privileged_member resend closed_invitation: allow'
status: active
fact_kind: predicate
predicate_name: permission_rule
predicate_args:
  - privileged_member
  - resend
  - closed_invitation
  - allow
polarity: assert
canonical_key: permission_rule(privileged_member,resend,closed_invitation,allow)
claim_key: CLAIM-BEE708F8DCA1F50D
claim_text: Expired, cancelled or rejected invitations can be resent by a privileged member, which returns them to pending
text_ref: REQ-expired-cancelled-or-rejected-invitations--CDCCD352
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Organization invitations specs: invtations.specs.md#resend'
  recorded_at: '2026-11-15T21:50:21.085Z'
id: FACT-papra-perm-privileged-member-resend-closed-invitation
type: fact
---
Expired, cancelled or rejected invitations can be resent by a privileged member, which returns them to pending.

Modeled from REQ-expired-cancelled-or-rejected-invitations--CDCCD352 so the claim can be checked for contradictions.
