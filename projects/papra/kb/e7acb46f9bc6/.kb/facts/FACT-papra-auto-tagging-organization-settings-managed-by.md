---
title: auto_tagging.organization_settings managed_by = owners
status: active
fact_kind: property_value
subject_key: auto_tagging.organization_settings
property_key: managed_by
operator: eq
value_type: string
value_string: owners
claim_key: CLAIM-4C8D698DF3502E00
claim_text: Auto tagging is configured per organization by its owners
text_ref: REQ-papra-auto-tagging-owner-settings
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.6.0 changelog, #1201: Auto tagging can be configured per organization, with a dedi'
  recorded_at: '2026-11-16T10:22:16.183Z'
id: FACT-papra-auto-tagging-organization-settings-managed-by
type: fact
---
Auto tagging is configured per organization by its owners.

Modeled from REQ-papra-auto-tagging-owner-settings so the claim can be checked for contradictions.
