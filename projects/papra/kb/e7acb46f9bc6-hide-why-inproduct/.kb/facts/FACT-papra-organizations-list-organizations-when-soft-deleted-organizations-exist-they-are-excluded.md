---
title: organizations.list_organizations when_soft_deleted_organizations_exist_they_are_excluded = True
status: active
fact_kind: property_value
subject_key: organizations.list_organizations
property_key: when_soft_deleted_organizations_exist_they_are_excluded
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-CF5F46E8D4C91965
claim_text: When soft-deleted organizations exist, they are excluded from the results
text_ref: REQ-papra-organizations-soft-deleted-organizations-exist-they-are-excluded
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1513'
  recorded_at: '2026-03-25T13:23:43.000Z'
id: FACT-papra-organizations-list-organizations-when-soft-deleted-organizations-exist-they-are-excluded
type: fact
---
When soft-deleted organizations exist, they are excluded from the results.

Modeled from REQ-papra-organizations-soft-deleted-organizations-exist-they-are-excluded so the claim can be checked for contradictions.
