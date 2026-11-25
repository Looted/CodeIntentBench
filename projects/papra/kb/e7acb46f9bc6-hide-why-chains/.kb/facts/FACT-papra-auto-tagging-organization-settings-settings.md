---
title: auto_tagging.organization_settings settings = enabled_create_tags_max_tags
status: active
fact_kind: property_value
subject_key: auto_tagging.organization_settings
property_key: settings
operator: eq
value_type: string
value_string: enabled_create_tags_max_tags
claim_key: CLAIM-56687499A054AFAD
claim_text: owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document
text_ref: REQ-papra-auto-tagging-owner-settings
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1201: Auto tagging can be configured per organization, with a dedi'
  recorded_at: '2026-11-16T13:19:22.971Z'
id: FACT-papra-auto-tagging-organization-settings-settings
type: fact
---
Owners choose whether it is on, whether it may create tags and the maximum number of tags it adds to a document.

Modeled from REQ-papra-auto-tagging-owner-settings so the claim can be checked for contradictions.
