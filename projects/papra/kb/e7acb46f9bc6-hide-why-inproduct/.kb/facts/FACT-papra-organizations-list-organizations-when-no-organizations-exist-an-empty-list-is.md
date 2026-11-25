---
title: organizations.list_organizations when_no_organizations_exist_an_empty_list_is = True
status: active
fact_kind: property_value
subject_key: organizations.list_organizations
property_key: when_no_organizations_exist_an_empty_list_is
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-B8F1FFE04A0CE983
claim_text: When no organizations exist, an empty list is returned
text_ref: REQ-papra-organizations-no-organizations-exist-empty-list-is-returned
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1500'
  recorded_at: '2026-07-25T12:38:17.000Z'
id: FACT-papra-organizations-list-organizations-when-no-organizations-exist-an-empty-list-is
type: fact
---
When no organizations exist, an empty list is returned.

Modeled from REQ-papra-organizations-no-organizations-exist-empty-list-is-returned so the claim can be checked for contradictions.
