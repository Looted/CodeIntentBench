---
title: Case-study tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is re…
status: active
semantic_text: Case-study tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Case-study tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-691110DB2E4D5A4B
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2ec483619b1a574e4888daaa25765480a84f6434152c365ce722279c693fdb2b
semantic_inventory:
  - claim_key: CLAIM-691110DB2E4D5A4B
    claim_text: Case-study tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 114
    subjects:
      - website.case_study_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 116
      end: 162
    subjects:
      - website.case_study_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-201'
  recorded_at: '2026-05-13T14:39:43.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-case-study-tags-names-trimmed
type: req
---
Case-study tag names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(website): trim case-study tag names (WEB-201)

Source: Marketing website decision log (apps/website) - WEB-201
