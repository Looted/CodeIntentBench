---
title: At most 300 case-study tags can be created per site on the marketing website; the limit is fixed.
status: active
semantic_text: At most 300 case-study tags can be created per site on the marketing website; the limit is fixed.
semantic_clauses:
  - At most 300 case-study tags can be created per site on the marketing website
  - the limit is fixed
logic_claims:
  - CLAIM-9FA36A020632C274
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0913278c94f96dd5b155de73be4768f58a351e560482b943417d98b555175b07
semantic_inventory:
  - claim_key: CLAIM-9FA36A020632C274
    claim_text: At most 300 case-study tags can be created per site on the marketing website
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - website.case_study_tags
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 96
    subjects:
      - website.case_study_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-197'
  recorded_at: '2025-12-12T17:23:45.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Lists of case-study tags are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-website-case-study-tags-maximum-count
type: req
---
At most 300 case-study tags can be created per site on the marketing website; the limit is fixed.

## Context

Lists of case-study tags are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(website): limit case-study tags per site (WEB-197)

Source: Marketing website decision log (apps/website) - WEB-197
