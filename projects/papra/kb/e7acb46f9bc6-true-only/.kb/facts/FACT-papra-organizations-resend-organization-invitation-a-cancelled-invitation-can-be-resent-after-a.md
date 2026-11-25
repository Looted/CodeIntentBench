---
title: organizations.resend_organization_invitation a_cancelled_invitation_can_be_resent_after_a = True
status: active
fact_kind: property_value
subject_key: organizations.resend_organization_invitation
property_key: a_cancelled_invitation_can_be_resent_after_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F99E997543CC8242
claim_text: A cancelled invitation can be resent after a newer invitation expires
text_ref: REQ-papra-organizations-cancelled-invitation-can-be-resent-after-newer
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1522'
  recorded_at: '2025-07-03T14:46:26.000Z'
id: FACT-papra-organizations-resend-organization-invitation-a-cancelled-invitation-can-be-resent-after-a
type: fact
---
A cancelled invitation can be resent after a newer invitation expires.

Modeled from REQ-papra-organizations-cancelled-invitation-can-be-resent-after-newer so the claim can be checked for contradictions.
