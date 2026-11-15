---
title: organization.soft_delete records_deleted_at_and_deleted_by = True
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: records_deleted_at_and_deleted_by
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0C34C6C92767337A
claim_text: deletedAt and deletedBy are recorded
text_ref: REQ-deleting-an-organization-is-a-soft-delete--58DE105C
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#soft-delete'
  recorded_at: '2026-11-15T21:50:12.083Z'
id: FACT-papra-organization-soft-delete-records-deleted-at-and-deleted-by
type: fact
---
DeletedAt and deletedBy are recorded.

Modeled from REQ-deleting-an-organization-is-a-soft-delete--58DE105C so the claim can be checked for contradictions.
