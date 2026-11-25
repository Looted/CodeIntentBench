---
title: organizations.get_organization_count when_some_organizations_are_soft_deleted_they_are = True
status: active
fact_kind: property_value
subject_key: organizations.get_organization_count
property_key: when_some_organizations_are_soft_deleted_they_are
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6BBD2AEA7EAF3D6
claim_text: When some organizations are soft-deleted, they are excluded from the count
text_ref: REQ-papra-organizations-some-organizations-are-soft-deleted-they-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1515'
  recorded_at: '2025-11-15T17:24:50.000Z'
id: FACT-papra-organizations-get-organization-count-when-some-organizations-are-soft-deleted-they-are
type: fact
---
When some organizations are soft-deleted, they are excluded from the count.

Modeled from REQ-papra-organizations-some-organizations-are-soft-deleted-they-are so the claim can be checked for contradictions.
