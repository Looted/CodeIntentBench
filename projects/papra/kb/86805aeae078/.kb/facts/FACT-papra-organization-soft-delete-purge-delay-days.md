---
title: organization.soft_delete purge_delay_days = 30
status: active
fact_kind: property_value
subject_key: organization.soft_delete
property_key: purge_delay_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-0EFB5252E03951AA
claim_text: a purge is scheduled 30 days later (scheduledPurgeAt)
text_ref: REQ-deleting-an-organization-is-a-soft-delete--58DE105C
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#soft-delete'
  recorded_at: '2026-11-15T21:50:12.666Z'
id: FACT-papra-organization-soft-delete-purge-delay-days
type: fact
---
A purge is scheduled 30 days later (scheduledPurgeAt).

Modeled from REQ-deleting-an-organization-is-a-soft-delete--58DE105C so the claim can be checked for contradictions.
