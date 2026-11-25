---
title: organizations.resend_organization_invitation an_old_invitation_cannot_be_resent_to_a = True
status: active
fact_kind: property_value
subject_key: organizations.resend_organization_invitation
property_key: an_old_invitation_cannot_be_resent_to_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5212AE457FAB9A71
claim_text: An old invitation cannot be resent to a current member
text_ref: REQ-papra-organizations-old-invitation-cannot-be-resent-to-current
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1538'
  recorded_at: '2025-07-18T09:25:33.000Z'
id: FACT-papra-organizations-resend-organization-invitation-an-old-invitation-cannot-be-resent-to-a
type: fact
---
An old invitation cannot be resent to a current member.

Modeled from REQ-papra-organizations-old-invitation-cannot-be-resent-to-current so the claim can be checked for contradictions.
