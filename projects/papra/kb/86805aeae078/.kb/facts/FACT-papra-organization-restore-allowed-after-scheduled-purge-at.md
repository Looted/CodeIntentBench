---
title: organization.restore allowed_after_scheduled_purge_at = False
status: active
fact_kind: property_value
subject_key: organization.restore
property_key: allowed_after_scheduled_purge_at
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-95535DA0BC6C61AD
claim_text: after that date recovery is refused even if the purge has not run yet
text_ref: REQ-a-soft-deleted-organization-can-be-restore-09031B40
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra documentation site (apps/docs): 05-architecture/organization-deletion-purge.mdx#recovery'
  recorded_at: '2026-11-15T21:49:58.345Z'
id: FACT-papra-organization-restore-allowed-after-scheduled-purge-at
type: fact
---
After that date recovery is refused even if the purge has not run yet.

Modeled from REQ-a-soft-deleted-organization-can-be-restore-09031B40 so the claim can be checked for contradictions.
