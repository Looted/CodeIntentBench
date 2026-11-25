---
title: Addresses from disposable-mail domains are refused in documentation feedback submissions; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in documentation feedback submissions; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in documentation feedback submissions
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-43AFEEB739118372
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 1c72a4b8c1594af5ae1197e3476de4b17649b88aefb6eac5b3835bac2be1f771
semantic_inventory:
  - claim_key: CLAIM-43AFEEB739118372
    claim_text: Addresses from disposable-mail domains are refused in documentation feedback submissions
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 88
    subjects:
      - docs.feedback_submissions
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 90
      end: 131
    subjects:
      - docs.feedback_submissions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-334'
  recorded_at: '2026-04-04T09:44:50.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
id: REQ-docs-feedback-submissions-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in documentation feedback submissions; the allowed list wins over the block list.

## Context

Reason not stated.

## Source

> feat(docs): block disposable email domains (DOC-334)

Source: Documentation site decision log (apps/docs) - DOC-334
