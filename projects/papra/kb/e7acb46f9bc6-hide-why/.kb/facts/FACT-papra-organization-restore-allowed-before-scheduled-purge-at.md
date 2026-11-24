---
title: organization.restore allowed_before_scheduled_purge_at = True
status: active
fact_kind: property_value
subject_key: organization.restore
property_key: allowed_before_scheduled_purge_at
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-594F4DD77BE8CBBC
claim_text: A soft-deleted organization can be restored before scheduledPurgeAt
text_ref: REQ-a-soft-deleted-organization-can-be-restore-09031B40
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#recovery'
  recorded_at: '2026-11-15T21:44:53.049Z'
id: FACT-papra-organization-restore-allowed-before-scheduled-purge-at
type: fact
---
A soft-deleted organization can be restored before scheduledPurgeAt.

Modeled from REQ-a-soft-deleted-organization-can-be-restore-09031B40 so the claim can be checked for contradictions.
