---
title: server.process_mode options = api_workers_both
status: active
fact_kind: property_value
subject_key: server.process_mode
property_key: options
operator: eq
value_type: string
value_string: api_workers_both
claim_key: CLAIM-E29AAE1F2330113B
claim_text: A process can start just the API, just the workers, or both
text_ref: REQ-papra-api-workers-or-both
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.2 changelog, #577: Added the possibility to start either just the api, just the'
  recorded_at: '2026-11-16T10:35:09.900Z'
id: FACT-papra-server-process-mode-options
type: fact
---
A process can start just the API, just the workers, or both.

Modeled from REQ-papra-api-workers-or-both so the claim can be checked for contradictions.
