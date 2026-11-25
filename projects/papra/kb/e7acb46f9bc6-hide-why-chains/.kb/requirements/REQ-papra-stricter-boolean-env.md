---
title: A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false.
status: active
semantic_text: A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false.
semantic_clauses:
  - A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false
logic_claims:
  - CLAIM-CD0F791252F879AF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b1a5f9f6934951ea389ab05484a672dac84df68cb39c8031cc2722cfaf011408
semantic_inventory:
  - claim_key: CLAIM-CD0F791252F879AF
    claim_text: A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - config.boolean_env
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.0 changelog, #984: App environment configuration validation is now a bit strict'
  recorded_at: '2026-11-16T13:21:15.418Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:config
id: REQ-papra-stricter-boolean-env
type: req
---
A boolean environment variable with a value that is not boolean-ish fails validation instead of reading as false.

## Context

Reason not stated.

## Source

> App environment configuration validation is now a bit stricter, with slightly different error messages. And the following specific changes: - Boolean env variables previously considered non-truthy values as `false`. Now they will throw a validation error if the value is not a valid boolean-ish value - `AUTH_PROVIDERS_CUSTOMS` json parsing now accepts only valid boolean values for the `pkce` property, while before it accepted any non-true value as `false` - Stricter `AUTH_FORBIDDEN_EMAIL_DOMAINS` domain validation

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.0 changelog, #984: App environment configuration validation is now a bit strict
