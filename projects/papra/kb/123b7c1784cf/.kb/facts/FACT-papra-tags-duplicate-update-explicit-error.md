---
title: tags.duplicate_update explicit_error = True
status: active
fact_kind: property_value
subject_key: tags.duplicate_update
property_key: explicit_error
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-9D5371516A84F591
claim_text: Updating a tag with a name another tag already has returns an explicit duplicate-name error
text_ref: REQ-papra-tag-rename-duplicate-error
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.2.0 changelog, #852: Added explicit error when trying to update a tag with a name'
  recorded_at: '2026-11-25T19:28:26.328Z'
id: FACT-papra-tags-duplicate-update-explicit-error
type: fact
---
Updating a tag with a name another tag already has returns an explicit duplicate-name error.

Modeled from REQ-papra-tag-rename-duplicate-error so the claim can be checked for contradictions.
