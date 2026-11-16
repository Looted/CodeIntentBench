---
title: config.route_timeout config_key = server.defaultRouteTimeoutMs
status: active
fact_kind: property_value
subject_key: config.route_timeout
property_key: config_key
operator: eq
value_type: string
value_string: server.defaultRouteTimeoutMs
claim_key: CLAIM-58CE2628CEFF748F
claim_text: The default route timeout is the config key server.defaultRouteTimeoutMs
text_ref: REQ-papra-default-route-timeout-config-key
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #707: Changed config key `config.server.routeTimeoutMs` to `config'
  recorded_at: '2026-11-16T10:34:29.947Z'
id: FACT-papra-config-route-timeout-config-key
type: fact
---
The default route timeout is the config key server.defaultRouteTimeoutMs.

Modeled from REQ-papra-default-route-timeout-config-key so the claim can be checked for contradictions.
