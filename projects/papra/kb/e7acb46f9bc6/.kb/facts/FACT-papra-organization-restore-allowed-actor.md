---
title: organization.restore allowed_actor = deleting_user
status: active
fact_kind: property_value
subject_key: organization.restore
property_key: allowed_actor
operator: eq
value_type: string
value_string: deleting_user
claim_key: CLAIM-F713E037940A04C6
claim_text: only by the user who deleted it
text_ref: REQ-a-soft-deleted-organization-can-be-restore-09031B40
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#recovery'
  recorded_at: '2026-11-15T21:44:53.692Z'
id: FACT-papra-organization-restore-allowed-actor
type: fact
---
Only by the user who deleted it.

Modeled from REQ-a-soft-deleted-organization-can-be-restore-09031B40 so the claim can be checked for contradictions.
