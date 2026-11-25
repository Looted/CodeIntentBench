---
title: organizations.delete_all_organization_invitations deletes_all_invitations_for_the_specified_organization = True
status: active
fact_kind: property_value
subject_key: organizations.delete_all_organization_invitations
property_key: deletes_all_invitations_for_the_specified_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8572CE14D824D06F
claim_text: Deletes all invitations for the specified organization
text_ref: REQ-papra-organizations-deletes-all-invitations-for-specified-organization
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1476'
  recorded_at: '2025-04-25T16:46:37.000Z'
id: FACT-papra-organizations-delete-all-organization-invitations-deletes-all-invitations-for-the-specified-organization
type: fact
---
Deletes all invitations for the specified organization.

Modeled from REQ-papra-organizations-deletes-all-invitations-for-specified-organization so the claim can be checked for contradictions.
