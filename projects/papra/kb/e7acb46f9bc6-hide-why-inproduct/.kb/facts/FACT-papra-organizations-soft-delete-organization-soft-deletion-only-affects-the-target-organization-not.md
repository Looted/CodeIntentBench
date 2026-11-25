---
title: organizations.soft_delete_organization soft_deletion_only_affects_the_target_organization_not = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: soft_deletion_only_affects_the_target_organization_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-72D0564BDA2A1F40
claim_text: Soft deletion only affects the target organization, not other organizations
text_ref: REQ-papra-organizations-soft-deletion-only-affects-target-organization-not
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1605'
  recorded_at: '2025-04-15T09:56:53.000Z'
id: FACT-papra-organizations-soft-delete-organization-soft-deletion-only-affects-the-target-organization-not
type: fact
---
Soft deletion only affects the target organization, not other organizations.

Modeled from REQ-papra-organizations-soft-deletion-only-affects-target-organization-not so the claim can be checked for contradictions.
