---
title: A single APP_BASE_URL sets the base URL of both the server and the client.
status: active
semantic_text: A single APP_BASE_URL sets the base URL of both the server and the client.
semantic_clauses:
  - A single APP_BASE_URL sets the base URL of both the server and the client
logic_claims:
  - CLAIM-DCC447FDBDEDF6EC
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1013428044e1b1f0f6c29456355a6655ef2887cdf983fd58806f9a919aab5ec7
semantic_inventory:
  - claim_key: CLAIM-DCC447FDBDEDF6EC
    claim_text: A single APP_BASE_URL sets the base URL of both the server and the client
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - config.app_base_url
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 0.6.4 changelog, #405: Introduce APP_BASE_URL to mutualize server and client base u'
  recorded_at: '2026-11-16T10:34:57.258Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:config
rationale: 'The changeset of #405 (2025-07-13): it was introduced "to mutualize server and client base url".'
id: REQ-papra-app-base-url
type: req
---
A single APP_BASE_URL sets the base URL of both the server and the client.

## Context

The changeset of #405 (2025-07-13): it was introduced "to mutualize server and client base url".

## Why this changed

The changeset of #405 (2025-07-13) gives the reason for the change: it was introduced "to mutualize server and client base url".

## Source

> Introduce APP_BASE_URL to mutualize server and client base url

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 0.6.4 changelog, #405: Introduce APP_BASE_URL to mutualize server and client base u
