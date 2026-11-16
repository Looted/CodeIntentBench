---
title: search.quoted_filters available = True
status: active
fact_kind: property_value
subject_key: search.quoted_filters
property_key: available
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-92EE862AE2D2E993
claim_text: Search filters can be quoted, so a filter name may contain spaces
text_ref: REQ-papra-quoted-search-filters
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.3.0 changelog, #970: Added support for quoted search filters, like `"warranty dat'
  recorded_at: '2026-11-16T10:21:17.193Z'
id: FACT-papra-search-quoted-filters-available
type: fact
---
Search filters can be quoted, so a filter name may contain spaces.

Modeled from REQ-papra-quoted-search-filters so the claim can be checked for contradictions.
