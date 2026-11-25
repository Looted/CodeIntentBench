---
title: organizations.purge_expired_soft_deleted_organizations returns_zero_count_when_no_organizations_need_purging = True
status: active
fact_kind: property_value
subject_key: organizations.purge_expired_soft_deleted_organizations
property_key: returns_zero_count_when_no_organizations_need_purging
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-964EDAE1B437803A
claim_text: Returns zero count when no organizations need purging
text_ref: REQ-papra-organizations-returns-zero-count-when-no-organizations-need
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1603'
  recorded_at: '2026-03-02T15:24:39.000Z'
id: FACT-papra-organizations-purge-expired-soft-deleted-organizations-returns-zero-count-when-no-organizations-need-purging
type: fact
---
Returns zero count when no organizations need purging.

Modeled from REQ-papra-organizations-returns-zero-count-when-no-organizations-need so the claim can be checked for contradictions.
