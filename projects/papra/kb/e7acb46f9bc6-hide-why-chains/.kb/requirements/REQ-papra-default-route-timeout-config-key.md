---
title: The default route timeout is the config key server.defaultRouteTimeoutMs; its environment variable is unchanged.
status: active
semantic_text: The default route timeout is the config key server.defaultRouteTimeoutMs; its environment variable is unchanged.
semantic_clauses:
  - The default route timeout is the config key server.defaultRouteTimeoutMs
  - its environment variable is unchanged
logic_claims:
  - CLAIM-58CE2628CEFF748F
  - CLAIM-9EDECB2B91E04FE1
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fed09be56b4c9693a7cf0a378b1b5b0a88f29200dd800cac668444d754b89c04
semantic_inventory:
  - claim_key: CLAIM-58CE2628CEFF748F
    claim_text: The default route timeout is the config key server.defaultRouteTimeoutMs
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - config.route_timeout
  - claim_key: CLAIM-9EDECB2B91E04FE1
    claim_text: its environment variable is unchanged
    role: descriptive
    status: modeled
    span:
      start: 74
      end: 111
    subjects:
      - config.route_timeout
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.0.0 changelog, #707: Changed config key `config.server.routeTimeoutMs` to `config'
  recorded_at: '2026-11-16T13:20:44.303Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:config
id: REQ-papra-default-route-timeout-config-key
type: req
---
The default route timeout is the config key server.defaultRouteTimeoutMs; its environment variable is unchanged.

## Context

Reason not stated.

## Source

> Changed config key `config.server.routeTimeoutMs` to `config.server.defaultRouteTimeoutMs` (env variable remains the same)

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.0.0 changelog, #707: Changed config key `config.server.routeTimeoutMs` to `config
