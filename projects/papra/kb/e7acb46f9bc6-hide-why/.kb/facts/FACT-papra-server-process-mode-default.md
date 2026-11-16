---
title: server.process_mode default = both
status: active
fact_kind: property_value
subject_key: server.process_mode
property_key: default
operator: eq
value_type: string
value_string: both
claim_key: CLAIM-83E40BFD9E768C4D
claim_text: both is the default
text_ref: REQ-papra-api-workers-or-both
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.2 changelog, #577: Added the possibility to start either just the api, just the'
  recorded_at: '2026-11-16T13:21:25.336Z'
id: FACT-papra-server-process-mode-default
type: fact
---
Both is the default.

Modeled from REQ-papra-api-workers-or-both so the claim can be checked for contradictions.
