---
title: organizations.soft_delete_organization attempting_to_delete_a_non_existent_organization_throws = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: attempting_to_delete_a_non_existent_organization_throws
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6FA56619757F961A
claim_text: Attempting to delete a non-existent organization throws an error
text_ref: REQ-papra-organizations-attempting-to-delete-non-existent-organization-throws
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1548'
  recorded_at: '2026-03-12T17:48:16.000Z'
id: FACT-papra-organizations-soft-delete-organization-attempting-to-delete-a-non-existent-organization-throws
type: fact
---
Attempting to delete a non-existent organization throws an error.

Modeled from REQ-papra-organizations-attempting-to-delete-non-existent-organization-throws so the claim can be checked for contradictions.
