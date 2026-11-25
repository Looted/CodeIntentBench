---
title: Changelog label names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is r…
status: active
semantic_text: Changelog label names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Changelog label names on the marketing website are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-B5C23AFD11D43FCC
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 4e3019936a14bf41b769e4ae62dc82e38da0268802f5ef09735f00dcf8219d80
semantic_inventory:
  - claim_key: CLAIM-B5C23AFD11D43FCC
    claim_text: Changelog label names on the marketing website are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - website.changelog_labels
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 117
      end: 163
    subjects:
      - website.changelog_labels
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-178'
  recorded_at: '2026-07-16T16:28:22.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Pasted names carried trailing spaces and produced changelog labels that looked identical but were not.
id: REQ-website-changelog-labels-names-trimmed
type: req
---
Changelog label names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced changelog labels that looked identical but were not.

## Source

> fix(website): trim changelog label names (WEB-178)

Source: Marketing website decision log (apps/website) - WEB-178
