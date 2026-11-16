---
title: tags.api_key_access allowed = True
status: active
fact_kind: property_value
subject_key: tags.api_key_access
property_key: allowed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-47ED958FF9FF5DE8
claim_text: Tags can be added to and removed from documents with an API key
text_ref: REQ-papra-tags-changeable-with-api-keys
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.3 changelog, #366: Allow for adding/removing tags to document using api keys'
  recorded_at: '2026-11-16T10:32:21.580Z'
id: FACT-papra-tags-api-key-access-allowed
type: fact
---
Tags can be added to and removed from documents with an API key.

Modeled from REQ-papra-tags-changeable-with-api-keys so the claim can be checked for contradictions.
