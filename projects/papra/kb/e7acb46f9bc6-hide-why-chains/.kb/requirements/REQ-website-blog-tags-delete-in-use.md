---
title: Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use.
status: active
semantic_text: Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use.
semantic_clauses:
  - Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use
logic_claims:
  - CLAIM-EC7C44D37339F9E5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1a8f6ca48e88d97dff564c76e52a416e9e55a95026601b378f30de01d791b80d
semantic_inventory:
  - claim_key: CLAIM-EC7C44D37339F9E5
    claim_text: Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 119
    subjects:
      - website.blog_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-123'
  recorded_at: '2026-05-16T16:48:48.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Asking for confirmation once per use made cleaning up blog tags impractical.
id: REQ-website-blog-tags-delete-in-use
type: req
---
Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use.

## Context

Asking for confirmation once per use made cleaning up blog tags impractical.

## Source

> feat(website): deleting a blog tag detaches it (WEB-123)

Source: Marketing website decision log (apps/website) - WEB-123
