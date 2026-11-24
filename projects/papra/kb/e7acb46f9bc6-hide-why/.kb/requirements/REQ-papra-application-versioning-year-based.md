---
title: The application package (@papra/app) is versioned YY.MINOR.PATCH along a single release line, and older YY.MINOR versions receive no maintenance or security…
status: active
semantic_text: The application package (@papra/app) is versioned YY.MINOR.PATCH along a single release line, and older YY.MINOR versions receive no maintenance or security patches; library packages follow SemVer; Docker images use the same version as the application package.
semantic_clauses:
  - The application package (@papra/app) is versioned YY.MINOR.PATCH along a single release line
  - older YY.MINOR versions receive no maintenance or security patches
  - library packages follow SemVer
  - Docker images use the same version as the application package
logic_claims:
  - CLAIM-9789662CA7264107
  - CLAIM-B0F88D8F6AF71421
  - CLAIM-094FF0D9EAB3E0CD
  - CLAIM-9DFEC3FA0A3547A3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2ecad96f85af789af49773436aeb40c1dd44d32e047631b1efe68624fd44d38d
semantic_inventory:
  - claim_key: CLAIM-9789662CA7264107
    claim_text: The application package (@papra/app) is versioned YY.MINOR.PATCH along a single release line
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - release.versioning
  - claim_key: CLAIM-B0F88D8F6AF71421
    claim_text: older YY.MINOR versions receive no maintenance or security patches
    role: descriptive
    status: modeled
    span:
      start: 98
      end: 164
    subjects:
      - release.versioning
  - claim_key: CLAIM-094FF0D9EAB3E0CD
    claim_text: library packages follow SemVer
    role: descriptive
    status: modeled
    span:
      start: 166
      end: 196
    subjects:
      - release.versioning
  - claim_key: CLAIM-9DFEC3FA0A3547A3
    claim_text: Docker images use the same version as the application package
    role: descriptive
    status: modeled
    span:
      start: 198
      end: 259
    subjects:
      - release.versioning
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra documentation site (apps/docs): 04-resources/04-versioning-and-tagging.mdx#application-versioning'
  recorded_at: '2026-11-16T13:15:21.785Z'
tags:
  - bootstrap
  - knowledge-source:papra-docs
  - component:release
id: REQ-papra-application-versioning-year-based
type: req
---
The application package (@papra/app) is versioned YY.MINOR.PATCH along a single release line, and older YY.MINOR versions receive no maintenance or security patches; library packages follow SemVer; Docker images use the same version as the application package.

## Context

Reason not stated.

## Why this changed

PR #1454 (2026-09-01) rewrote the versioning page. The application format is now YY.MINOR.PATCH, a feature release counter within the year, where the earlier page described CalVer YY.M.N with the month number as the second part.

## Source

> Papra application uses the format `YY.MINOR.PATCH`:
> Versions move forwards along a single release line. Papra doesn't publish maintenance or security patches for older `YY.MINOR` versions, so you must upgrade to the latest version to receive fixes.
> Docker images use the same version as the application package.

Source: Papra documentation site (apps/docs) - 04-resources/04-versioning-and-tagging.mdx#application-versioning
