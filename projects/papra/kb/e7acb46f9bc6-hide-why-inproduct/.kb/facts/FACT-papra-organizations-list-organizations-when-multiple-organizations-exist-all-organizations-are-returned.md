---
title: organizations.list_organizations when_multiple_organizations_exist_all_organizations_are_returned = True
status: active
fact_kind: property_value
subject_key: organizations.list_organizations
property_key: when_multiple_organizations_exist_all_organizations_are_returned
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1B23BEC0D9993A13
claim_text: When multiple organizations exist, all organizations are returned with member counts
text_ref: REQ-papra-organizations-multiple-organizations-exist-all-organizations-are-returned
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1496'
  recorded_at: '2026-06-11T10:49:35.000Z'
id: FACT-papra-organizations-list-organizations-when-multiple-organizations-exist-all-organizations-are-returned
type: fact
---
When multiple organizations exist, all organizations are returned with member counts.

Modeled from REQ-papra-organizations-multiple-organizations-exist-all-organizations-are-returned so the claim can be checked for contradictions.
