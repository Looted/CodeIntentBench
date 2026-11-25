---
title: Blog category names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is ref…
status: active
semantic_text: Blog category names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Blog category names on the marketing website are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-E722FC30291EF009
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 11726d41cd395b19d39f79c6f5fcde46081f66dd0f3f594c2abbb9d6561322ba
semantic_inventory:
  - claim_key: CLAIM-E722FC30291EF009
    claim_text: Blog category names on the marketing website are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 113
    subjects:
      - website.blog_categories
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 115
      end: 161
    subjects:
      - website.blog_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-151'
  recorded_at: '2025-08-17T16:39:01.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Pasted names carried trailing spaces and produced blog categories that looked identical but were not.
id: REQ-website-blog-categories-names-trimmed
type: req
---
Blog category names on the marketing website are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Pasted names carried trailing spaces and produced blog categories that looked identical but were not.

## Source

> fix(website): trim blog category names (WEB-151)

Source: Marketing website decision log (apps/website) - WEB-151
