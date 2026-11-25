---
title: organizations.list_organizations when_searching_with_an_empty_string_all_organizations = True
status: active
fact_kind: property_value
subject_key: organizations.list_organizations
property_key: when_searching_with_an_empty_string_all_organizations
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-0BDBAABD4EFEB171
claim_text: When searching with an empty string, all organizations are returned
text_ref: REQ-papra-organizations-searching-with-empty-string-all-organizations-are
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1507'
  recorded_at: '2025-11-25T15:16:21.000Z'
id: FACT-papra-organizations-list-organizations-when-searching-with-an-empty-string-all-organizations
type: fact
---
When searching with an empty string, all organizations are returned.

Modeled from REQ-papra-organizations-searching-with-empty-string-all-organizations-are so the claim can be checked for contradictions.
