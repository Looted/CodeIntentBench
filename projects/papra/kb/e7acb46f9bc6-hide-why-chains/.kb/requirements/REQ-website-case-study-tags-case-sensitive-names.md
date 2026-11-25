---
title: Case-study tags on the marketing website are compared exactly as typed; two case-study tags that differ only by letter case are distinct.
status: active
semantic_text: Case-study tags on the marketing website are compared exactly as typed; two case-study tags that differ only by letter case are distinct.
semantic_clauses:
  - Case-study tags on the marketing website are compared exactly as typed
  - two case-study tags that differ only by letter case are distinct
logic_claims:
  - CLAIM-E0554DF4EE699B9D
  - CLAIM-54898A8B15936112
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 75e35912575dca0924f7709db59f30f5b1a0ac86648282ce6b71f9e6eeed870c
semantic_inventory:
  - claim_key: CLAIM-E0554DF4EE699B9D
    claim_text: Case-study tags on the marketing website are compared exactly as typed
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 70
    subjects:
      - website.case_study_tags
  - claim_key: CLAIM-54898A8B15936112
    claim_text: two case-study tags that differ only by letter case are distinct
    role: descriptive
    status: modeled
    span:
      start: 72
      end: 136
    subjects:
      - website.case_study_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-192'
  recorded_at: '2025-03-02T15:02:35.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Existing data already held case-study tags that differ only by case, and merging them would have lost information.
id: REQ-website-case-study-tags-case-sensitive-names
type: req
---
Case-study tags on the marketing website are compared exactly as typed; two case-study tags that differ only by letter case are distinct.

## Context

Existing data already held case-study tags that differ only by case, and merging them would have lost information.

## Source

> docs(website): case-study tag names are case-sensitive (WEB-192)

Source: Marketing website decision log (apps/website) - WEB-192
