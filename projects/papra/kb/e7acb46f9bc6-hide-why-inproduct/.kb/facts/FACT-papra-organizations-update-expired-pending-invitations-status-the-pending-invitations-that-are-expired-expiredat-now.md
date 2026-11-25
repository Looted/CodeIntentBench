---
title: organizations.update_expired_pending_invitations_status the_pending_invitations_that_are_expired_expiredat_now = True
status: active
fact_kind: property_value
subject_key: organizations.update_expired_pending_invitations_status
property_key: the_pending_invitations_that_are_expired_expiredat_now
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-22C217BC14BAC2A7
claim_text: The pending invitations that are expired (expiredAt < now) are updated to expired
text_ref: REQ-papra-organizations-pending-invitations-that-are-expired-expiredat-now
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1488'
  recorded_at: '2026-07-11T09:43:29.000Z'
id: FACT-papra-organizations-update-expired-pending-invitations-status-the-pending-invitations-that-are-expired-expiredat-now
type: fact
---
The pending invitations that are expired (expiredAt < now) are updated to expired.

Modeled from REQ-papra-organizations-pending-invitations-that-are-expired-expiredat-now so the claim can be checked for contradictions.
