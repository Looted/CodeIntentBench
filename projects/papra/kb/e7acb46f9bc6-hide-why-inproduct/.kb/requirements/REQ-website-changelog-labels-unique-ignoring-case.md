---
title: Changelog labels on the marketing website are unique per site regardless of letter case; a duplicate is reported as changelog-label-already-exists.
status: active
semantic_text: Changelog labels on the marketing website are unique per site regardless of letter case; a duplicate is reported as changelog-label-already-exists.
semantic_clauses:
  - Changelog labels on the marketing website are unique per site regardless of letter case
  - a duplicate is reported as changelog-label-already-exists
logic_claims:
  - CLAIM-F48A2E0D2FF4F089
  - CLAIM-8DAFA32AAF1D4F70
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2145a558871e7f36b801052410a3ef31453983ba0eafd52786fe1795470b229d
semantic_inventory:
  - claim_key: CLAIM-F48A2E0D2FF4F089
    claim_text: Changelog labels on the marketing website are unique per site regardless of letter case
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 87
    subjects:
      - website.changelog_labels
  - claim_key: CLAIM-8DAFA32AAF1D4F70
    claim_text: a duplicate is reported as changelog-label-already-exists
    role: descriptive
    status: modeled
    span:
      start: 89
      end: 146
    subjects:
      - website.changelog_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-169'
  recorded_at: '2026-04-13T17:29:01.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-changelog-labels-unique-ignoring-case
type: req
---
Changelog labels on the marketing website are unique per site regardless of letter case; a duplicate is reported as changelog-label-already-exists.

## Context

Reason not stated.

## Source

> feat(website): case-insensitive unique changelog label names (WEB-169)

Source: Marketing website decision log (apps/website) - WEB-169
