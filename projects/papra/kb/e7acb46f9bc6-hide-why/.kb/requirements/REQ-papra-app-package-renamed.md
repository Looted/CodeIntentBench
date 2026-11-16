---
title: The application distribution package is @papra/app; release tags use the format @papra/app@<version>.
status: active
semantic_text: The application distribution package is @papra/app; release tags use the format @papra/app@<version>.
semantic_clauses:
  - The application distribution package is @papra/app
  - release tags use the format @papra/app@<version>
logic_claims:
  - CLAIM-ED3E7652C88616C0
  - CLAIM-8DC639E5FF2A4CBB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e3ebeacd7318b857c46c15effd971eb083654ac07f39f0ba44c925d00dadf5c5
semantic_inventory:
  - claim_key: CLAIM-ED3E7652C88616C0
    claim_text: The application distribution package is @papra/app
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 50
    subjects:
      - release.package_name
  - claim_key: CLAIM-8DC639E5FF2A4CBB
    claim_text: release tags use the format @papra/app@<version>
    role: descriptive
    status: modeled
    span:
      start: 52
      end: 100
    subjects:
      - release.package_name
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'papra-hq/papra release changelogs (apps/*/CHANGELOG.md): app 26.1.0 changelog, #796: Renamed the internal distribution package from `@papra/docke'
  recorded_at: '2026-11-16T13:21:47.817Z'
tags:
  - bootstrap
  - knowledge-source:papra-changelog
  - component:release
id: REQ-papra-app-package-renamed
type: req
---
The application distribution package is @papra/app; release tags use the format @papra/app@<version>.

## Context

Reason not stated.

## Source

> Renamed the internal distribution package from `@papra/docker` to `@papra/app`. New release tags will use the format `@papra/app@26.0.0` instead of `@papra/docker@26.0.0`.

Source: papra-hq/papra release changelogs (apps/*/CHANGELOG.md) - app 26.1.0 changelog, #796: Renamed the internal distribution package from `@papra/docke
