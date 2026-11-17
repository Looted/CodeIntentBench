---
title: Template tags in the template marketplace are compared exactly as typed; two template tags that differ only by letter case are distinct.
status: active
semantic_text: Template tags in the template marketplace are compared exactly as typed; two template tags that differ only by letter case are distinct.
semantic_clauses:
  - Template tags in the template marketplace are compared exactly as typed
  - two template tags that differ only by letter case are distinct
logic_claims:
  - CLAIM-F7DE2A747D955A78
  - CLAIM-A2A0BEEC477470F6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1c11138939fa67b4006cdcb6827919924c32c270b5e7a2530e4342661860e7e5
semantic_inventory:
  - claim_key: CLAIM-F7DE2A747D955A78
    claim_text: Template tags in the template marketplace are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - marketplace.template_tags
  - claim_key: CLAIM-A2A0BEEC477470F6
    claim_text: two template tags that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 135
    subjects:
      - marketplace.template_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-108'
  recorded_at: '2026-02-10T12:41:42.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Existing data already held template tags that differ only by case, and merging them would have lost information.
id: REQ-marketplace-template-tags-case-sensitive-names
type: req
---
Template tags in the template marketplace are compared exactly as typed; two template tags that differ only by letter case are distinct.

## Context

Existing data already held template tags that differ only by case, and merging them would have lost information.

## Source

> docs(marketplace): template tag names are case-sensitive (MKT-108)

Source: Template marketplace decision log - MKT-108
