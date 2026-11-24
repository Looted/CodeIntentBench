---
title: At most 5 requests per IP address per day are accepted in documentation feedback submissions.
status: active
semantic_text: At most 5 requests per IP address per day are accepted in documentation feedback submissions.
semantic_clauses:
  - At most 5 requests per IP address per day are accepted in documentation feedback submissions
logic_claims:
  - CLAIM-0FA597B6E337EE03
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2733d32bc1ee86e273866533bb3b06103eef9411e1124d6b29cd052203bd2c30
semantic_inventory:
  - claim_key: CLAIM-0FA597B6E337EE03
    claim_text: At most 5 requests per IP address per day are accepted in documentation feedback submissions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 92
    subjects:
      - docs.feedback_submissions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-350'
  recorded_at: '2026-08-24T15:32:35.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-feedback-submissions-rate-limit
type: req
---
At most 5 requests per IP address per day are accepted in documentation feedback submissions.

## Context

Reason not stated.

## Source

> feat(docs): rate limit feedback submissions (DOC-350)

Source: Documentation site decision log (apps/docs) - DOC-350
