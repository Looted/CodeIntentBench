---
title: The application package is versioned with CalVer (YY.M.N) and library packages with SemVer; Docker image tags follow the application version.
status: active
semantic_text: The application package is versioned with CalVer (YY.M.N) and library packages with SemVer; Docker image tags follow the application version.
logic_claims:
  - CLAIM-2409D0A34D2E61F6
  - CLAIM-48574984681E86A7
  - CLAIM-81DA91DC6A69FEBF
semantic_clauses:
  - The application package is versioned with CalVer (YY.M.N)
  - library packages with SemVer
  - Docker image tags follow the application version
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b7be5246cf6b27be3e13d3e1bf0c917e1c14854b3574e9b93ec16e38167b41a2
semantic_inventory:
  - claim_key: CLAIM-2409D0A34D2E61F6
    claim_text: The application package is versioned with CalVer (YY.M.N)
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - release.versioning
  - claim_key: CLAIM-48574984681E86A7
    claim_text: library packages with SemVer
    role: descriptive
    status: modeled
    span:
      start: 62
      end: 90
    subjects:
      - release.versioning
  - claim_key: CLAIM-81DA91DC6A69FEBF
    claim_text: Docker image tags follow the application version
    role: descriptive
    status: modeled
    span:
      start: 92
      end: 140
    subjects:
      - release.versioning
firmness: firm
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 04-resources/04-versioning-and-tagging.mdx'
  recorded_at: '2026-10-14T12:09:05.516Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:releases
id: REQ-the-application-package-is-versioned-with--B1FD7959
type: req
required_evidence: asserted
rationale: 'The versioning docs: the Docker image version always matches the application package version, "ensuring consistency across distribution methods". Why the app uses CalVer and libraries SemVer: reason not stated.'
---
The application package is versioned with CalVer (YY.M.N) and library packages with SemVer; Docker image tags follow the application version.

## Context

The versioning docs: the Docker image version always matches the application package version, "ensuring consistency across distribution methods". Why the app uses CalVer and libraries SemVer: reason not stated.

## Source

> Since **v0.9.6**, the app uses CalVer with the format `YY.M.N`:

Source: Papra documentation site (apps/docs) - 04-resources/04-versioning-and-tagging.mdx
