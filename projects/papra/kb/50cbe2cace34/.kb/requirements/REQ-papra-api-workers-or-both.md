---
title: A process can start just the API, just the workers, or both; both is the default.
status: active
semantic_text: A process can start just the API, just the workers, or both; both is the default.
semantic_clauses:
  - A process can start just the API, just the workers, or both
  - both is the default
logic_claims:
  - CLAIM-E29AAE1F2330113B
  - CLAIM-83E40BFD9E768C4D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e063b2d64990dfe9ef4aba572dc03aba311a1a086cadc44e12eac3d298525ec9
semantic_inventory:
  - claim_key: CLAIM-E29AAE1F2330113B
    claim_text: A process can start just the API, just the workers, or both
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 59
    subjects:
      - server.process_mode
  - claim_key: CLAIM-83E40BFD9E768C4D
    claim_text: both is the default
    role: descriptive
    status: modeled
    span:
      start: 61
      end: 80
    subjects:
      - server.process_mode
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 25.10.2 changelog, #577: Added the possibility to start either just the api, just the'
  recorded_at: '2026-11-16T10:35:11.392Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:config
id: REQ-papra-api-workers-or-both
type: req
---
A process can start just the API, just the workers, or both; both is the default.

## Context

Reason not stated.

## Source

> Added the possibility to start either just the api, just the workers, or both (default)

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 25.10.2 changelog, #577: Added the possibility to start either just the api, just the
