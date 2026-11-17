---
title: Case-study tag names on the marketing website are limited to 64 characters.
status: active
semantic_text: Case-study tag names on the marketing website are limited to 64 characters.
semantic_clauses:
  - Case-study tag names on the marketing website are limited to 64 characters
logic_claims:
  - CLAIM-069BC74816D096D2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c88a98fc9dd795e76a52d80c7d2e9d009ba57bbbd111a8670555ecbc3b07e0d4
semantic_inventory:
  - claim_key: CLAIM-069BC74816D096D2
    claim_text: Case-study tag names on the marketing website are limited to 64 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - website.case_study_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-200'
  recorded_at: '2025-10-12T16:08:31.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Longer names broke the layout of the list where case-study tags are shown.
id: REQ-website-case-study-tags-name-length
type: req
---
Case-study tag names on the marketing website are limited to 64 characters.

## Context

Longer names broke the layout of the list where case-study tags are shown.

## Source

> feat(website): cap case-study tag name length at 64 (WEB-200)

Source: Marketing website decision log (apps/website) - WEB-200
