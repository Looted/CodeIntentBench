---
title: Tag update and delete endpoints only change tags of the organization in the URL.
status: active
semantic_text: Tag update and delete endpoints only change tags of the organization in the URL.
semantic_clauses:
  - Tag update and delete endpoints only change tags of the organization in the URL
logic_claims:
  - CLAIM-44A0E3D33E94AC1D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a0a400f7909b123b854f4b69b340ca37334c5b6a2382e6f9b002c24329beae94
semantic_inventory:
  - claim_key: CLAIM-44A0E3D33E94AC1D
    claim_text: Tag update and delete endpoints only change tags of the organization in the URL
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 79
    subjects:
      - tags.mutation_scope
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.4.1 changelog, #1080: Fixed an authorization issue where tag updates and deletions'
  recorded_at: '2026-11-16T13:18:51.229Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:tags
id: REQ-papra-tag-mutations-scoped-to-organization
type: req
---
Tag update and delete endpoints only change tags of the organization in the URL.

## Context

Reason not stated.

## Source

> Fixed an authorization issue where tag updates and deletions were not scoped to the organization in the URL. Tag mutation endpoints are now correctly scoped to the requested organization. Addressing [GHSA-wrx4-3vff-jm94](https://github.com/papra-hq/papra/security/advisories/GHSA-wrx4-3vff-jm94), credit to [@TinkAnet](https://github.com/TinkAnet) for the responsible disclosure.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.4.1 changelog, #1080: Fixed an authorization issue where tag updates and deletions
