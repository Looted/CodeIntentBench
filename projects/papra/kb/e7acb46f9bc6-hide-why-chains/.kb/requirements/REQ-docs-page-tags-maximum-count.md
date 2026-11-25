---
title: The number of page tags per documentation version on the documentation site is limited to 20; the limit is fixed.
status: active
semantic_text: The number of page tags per documentation version on the documentation site is limited to 20; the limit is fixed.
semantic_clauses:
  - The number of page tags per documentation version on the documentation site is limited to 20
  - the limit is fixed
logic_claims:
  - CLAIM-EA8F0C18CCBC9C8E
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: fe36910905ce242530306f5853a8e97f603dc5097f7e89f7ea9774d07dba8aca
semantic_inventory:
  - claim_key: CLAIM-EA8F0C18CCBC9C8E
    claim_text: The number of page tags per documentation version on the documentation site is limited to 20
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - docs.page_tags
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 94
      end: 112
    subjects:
      - docs.page_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-110'
  recorded_at: '2026-06-26T13:24:56.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: Lists of page tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-docs-page-tags-maximum-count
type: req
---
The number of page tags per documentation version on the documentation site is limited to 20; the limit is fixed.

## Context

Lists of page tags are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(docs): limit page tags per documentation version (DOC-110)

Source: Documentation site decision log (apps/docs) - DOC-110
