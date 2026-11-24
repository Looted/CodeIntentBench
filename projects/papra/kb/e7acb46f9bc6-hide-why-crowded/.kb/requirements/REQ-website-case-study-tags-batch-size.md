---
title: At most 50 case-study tags can be added or removed in one request on the marketing website.
status: active
semantic_text: At most 50 case-study tags can be added or removed in one request on the marketing website.
semantic_clauses:
  - At most 50 case-study tags can be added or removed in one request on the marketing website
logic_claims:
  - CLAIM-D5A4227FD12C81E9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7de43c05480f323d365b6b5186c31ed5ab8f78e42575274a5e2bea2f4b16698
semantic_inventory:
  - claim_key: CLAIM-D5A4227FD12C81E9
    claim_text: At most 50 case-study tags can be added or removed in one request on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - website.case_study_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-215'
  recorded_at: '2025-12-13T11:17:53.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Requests with more than 50 case-study tags timed out on slow connections.
id: REQ-website-case-study-tags-batch-size
type: req
---
At most 50 case-study tags can be added or removed in one request on the marketing website.

## Context

Requests with more than 50 case-study tags timed out on slow connections.

## Source

> feat(website): batch case-study tags, 50 per request (WEB-215)

Source: Marketing website decision log (apps/website) - WEB-215
