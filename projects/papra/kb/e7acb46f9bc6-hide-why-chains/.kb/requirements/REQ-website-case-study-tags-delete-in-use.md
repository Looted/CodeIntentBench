---
title: Deleting a case-study tag on the marketing website removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a case-study tag on the marketing website removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a case-study tag on the marketing website removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-586FD34C6A7B0EAD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 6979c14814e2c30e286af9f315f824ff42bdc965e18e93a52c1ead6a6d417565
semantic_inventory:
  - claim_key: CLAIM-586FD34C6A7B0EAD
    claim_text: Deleting a case-study tag on the marketing website removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 125
    subjects:
      - website.case_study_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-210'
  recorded_at: '2025-10-20T09:58:26.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Asking for confirmation once per use made cleaning up case-study tags impractical.
id: REQ-website-case-study-tags-delete-in-use
type: req
---
Deleting a case-study tag on the marketing website removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up case-study tags impractical.

## Source

> feat(website): deleting a case-study tag detaches it (WEB-210)

Source: Marketing website decision log (apps/website) - WEB-210
