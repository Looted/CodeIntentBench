---
title: tags.mutation_scope scoped_to_url_organization = True
status: active
fact_kind: property_value
subject_key: tags.mutation_scope
property_key: scoped_to_url_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-44A0E3D33E94AC1D
claim_text: Tag update and delete endpoints only change tags of the organization in the URL
text_ref: REQ-papra-tag-mutations-scoped-to-organization
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1080: Fixed an authorization issue where tag updates and deletions'
  recorded_at: '2026-11-16T10:21:46.556Z'
id: FACT-papra-tags-mutation-scope-scoped-to-url-organization
type: fact
---
Tag update and delete endpoints only change tags of the organization in the URL.

Modeled from REQ-papra-tag-mutations-scoped-to-organization so the claim can be checked for contradictions.
