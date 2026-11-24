---
title: organizations.single_redirect redirects = True
status: active
fact_kind: property_value
subject_key: organizations.single_redirect
property_key: redirects
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-34B6122DADD587A0
claim_text: A user with exactly one organization who opens / is redirected to that organization
text_ref: REQ-papra-single-organization-redirect
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.1.0 changelog, #781: When navigating to / and having only one organization, get r'
  recorded_at: '2026-11-16T13:22:53.272Z'
id: FACT-papra-organizations-single-redirect-redirects
type: fact
---
A user with exactly one organization who opens / is redirected to that organization.

Modeled from REQ-papra-single-organization-redirect so the claim can be checked for contradictions.
