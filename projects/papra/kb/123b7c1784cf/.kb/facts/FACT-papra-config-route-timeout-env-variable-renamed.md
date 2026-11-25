---
title: config.route_timeout env_variable_renamed = False
status: active
fact_kind: property_value
subject_key: config.route_timeout
property_key: env_variable_renamed
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9EDECB2B91E04FE1
claim_text: its environment variable is unchanged
text_ref: REQ-papra-default-route-timeout-config-key
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #707: Changed config key `config.server.routeTimeoutMs` to `config'
  recorded_at: '2026-11-25T19:29:50.510Z'
id: FACT-papra-config-route-timeout-env-variable-renamed
type: fact
---
Its environment variable is unchanged.

Modeled from REQ-papra-default-route-timeout-config-key so the claim can be checked for contradictions.
