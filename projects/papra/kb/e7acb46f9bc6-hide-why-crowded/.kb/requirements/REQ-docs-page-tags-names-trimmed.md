---
title: Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-83A7E5F4B4FC49A3
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b79ca3cee3e2f9a33e7f9d0dd26a7304523be4626570a138d5ab38aecf0c4bd6
semantic_inventory:
  - claim_key: CLAIM-83A7E5F4B4FC49A3
    claim_text: Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 109
    subjects:
      - docs.page_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 111
      end: 157
    subjects:
      - docs.page_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-113'
  recorded_at: '2025-03-05T12:56:32.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-page-tags-names-trimmed
type: req
---
Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(docs): trim page tag names (DOC-113)

Source: Documentation site decision log (apps/docs) - DOC-113
