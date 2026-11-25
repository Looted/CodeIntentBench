---
title: A documentation version can hold at most 25 sidebar groups on the documentation site; the limit is configurable and 25 is the default.
status: active
semantic_text: A documentation version can hold at most 25 sidebar groups on the documentation site; the limit is configurable and 25 is the default.
semantic_clauses:
  - A documentation version can hold at most 25 sidebar groups on the documentation site
  - the limit is configurable and 25 is the default
logic_claims:
  - CLAIM-0AAE418C1A031F3F
  - CLAIM-73970E3A150076DB
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 42a190cd02ba30e980498cb7eecc2ad86cf1eb8a41fa29431d37ed18739cab18
semantic_inventory:
  - claim_key: CLAIM-0AAE418C1A031F3F
    claim_text: A documentation version can hold at most 25 sidebar groups on the documentation site
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - docs.sidebar_groups
  - claim_key: CLAIM-73970E3A150076DB
    claim_text: the limit is configurable and 25 is the default
    role: descriptive
    status: modeled
    span:
      start: 86
      end: 133
    subjects:
      - docs.sidebar_groups
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-166'
  recorded_at: '2026-09-02T08:26:54.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Lists of sidebar groups are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-docs-sidebar-groups-maximum-count
type: req
---
A documentation version can hold at most 25 sidebar groups on the documentation site; the limit is configurable and 25 is the default.

## Context

Lists of sidebar groups are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(docs): limit sidebar groups per documentation version (DOC-166)

Source: Documentation site decision log (apps/docs) - DOC-166
