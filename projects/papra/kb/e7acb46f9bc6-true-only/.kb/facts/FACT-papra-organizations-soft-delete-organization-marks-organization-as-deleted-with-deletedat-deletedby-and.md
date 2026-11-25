---
title: organizations.soft_delete_organization marks_organization_as_deleted_with_deletedat_deletedby_and = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: marks_organization_as_deleted_with_deletedat_deletedby_and
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-E832897D73A7AE56
claim_text: Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt
text_ref: REQ-papra-organizations-marks-organization-as-deleted-with-deletedat-deletedby
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1483'
  recorded_at: '2025-02-11T14:09:10.000Z'
id: FACT-papra-organizations-soft-delete-organization-marks-organization-as-deleted-with-deletedat-deletedby-and
type: fact
---
Marks organization as deleted with deletedAt, deletedBy, and scheduledPurgeAt.

Modeled from REQ-papra-organizations-marks-organization-as-deleted-with-deletedat-deletedby so the claim can be checked for contradictions.
