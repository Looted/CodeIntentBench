---
title: organizations.resend_organization_invitation an_old_invitation_cannot_be_resent_when_another = True
status: active
fact_kind: property_value
subject_key: organizations.resend_organization_invitation
property_key: an_old_invitation_cannot_be_resent_when_another
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8AE168F9B398C8B5
claim_text: An old invitation cannot be resent when another active invitation exists
text_ref: REQ-papra-organizations-old-invitation-cannot-be-resent-when-another
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1541'
  recorded_at: '2026-02-03T08:04:57.000Z'
id: FACT-papra-organizations-resend-organization-invitation-an-old-invitation-cannot-be-resent-when-another
type: fact
---
An old invitation cannot be resent when another active invitation exists.

Modeled from REQ-papra-organizations-old-invitation-cannot-be-resent-when-another so the claim can be checked for contradictions.
