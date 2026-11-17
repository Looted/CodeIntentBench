---
title: Template categories in the template marketplace are compared exactly as typed; two template categories that differ only by letter case are distinct.
status: active
semantic_text: Template categories in the template marketplace are compared exactly as typed; two template categories that differ only by letter case are distinct.
semantic_clauses:
  - Template categories in the template marketplace are compared exactly as typed
  - two template categories that differ only by letter case are distinct
logic_claims:
  - CLAIM-4D9380616F45A598
  - CLAIM-E5032888D3276E66
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c05a2e906d4ad7ee14b8be6326694d0f713c99b7845a09d6e9ef8eedde607bb8
semantic_inventory:
  - claim_key: CLAIM-4D9380616F45A598
    claim_text: Template categories in the template marketplace are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 77
    subjects:
      - marketplace.template_categories
  - claim_key: CLAIM-E5032888D3276E66
    claim_text: two template categories that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 79
      end: 147
    subjects:
      - marketplace.template_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Template marketplace decision log: MKT-122'
  recorded_at: '2025-12-06T10:45:29.000Z'
tags:
  - bootstrap
  - knowledge-source:marketplace-decisions
  - component:marketplace
rationale: Template categories mirror identifiers of an outside system that is case-sensitive, so folding case would merge distinct entries.
id: REQ-marketplace-template-categories-case-sensitive-names
type: req
---
Template categories in the template marketplace are compared exactly as typed; two template categories that differ only by letter case are distinct.

## Context

Template categories mirror identifiers of an outside system that is case-sensitive, so folding case would merge distinct entries.

## Source

> docs(marketplace): template category names are case-sensitive (MKT-122)

Source: Template marketplace decision log - MKT-122
