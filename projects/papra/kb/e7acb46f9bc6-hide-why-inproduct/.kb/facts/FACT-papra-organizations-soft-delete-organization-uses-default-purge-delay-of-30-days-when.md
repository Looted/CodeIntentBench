---
title: organizations.soft_delete_organization uses_default_purge_delay_of_30_days_when = True
status: active
fact_kind: property_value
subject_key: organizations.soft_delete_organization
property_key: uses_default_purge_delay_of_30_days_when
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B4158138100925B5
claim_text: Uses default purge delay of 30 days when not specified
text_ref: REQ-papra-organizations-uses-default-purge-delay-of-30-days
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1491'
  recorded_at: '2026-06-11T11:43:52.000Z'
id: FACT-papra-organizations-soft-delete-organization-uses-default-purge-delay-of-30-days-when
type: fact
---
Uses default purge delay of 30 days when not specified.

Modeled from REQ-papra-organizations-uses-default-purge-delay-of-30-days so the claim can be checked for contradictions.
