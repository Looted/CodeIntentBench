---
title: organizations.invite_member_to_organization stale_pending_invitations_expire_immediately_and_stop_consuming = True
status: active
fact_kind: property_value
subject_key: organizations.invite_member_to_organization
property_key: stale_pending_invitations_expire_immediately_and_stop_consuming
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C82077C8DA20EC84
claim_text: Stale pending invitations expire immediately and stop consuming organization capacity
text_ref: REQ-papra-organizations-stale-pending-invitations-expire-immediately-and-stop
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1609'
  recorded_at: '2025-11-22T14:10:53.000Z'
id: FACT-papra-organizations-invite-member-to-organization-stale-pending-invitations-expire-immediately-and-stop-consuming
type: fact
---
Stale pending invitations expire immediately and stop consuming organization capacity.

Modeled from REQ-papra-organizations-stale-pending-invitations-expire-immediately-and-stop so the claim can be checked for contradictions.
