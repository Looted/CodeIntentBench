---
title: A query in the back office audit log search is limited to 500 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the back office audit log search is limited to 500 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the back office audit log search is limited to 500 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-E10EC6D65192BD1A
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a9ff5bf4042dbf472dd89a4e0221d6ade79da7b52b206d76200d29126784304e
semantic_inventory:
  - claim_key: CLAIM-E10EC6D65192BD1A
    claim_text: A query in the back office audit log search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 72
    subjects:
      - backoffice.back_office_audit_log_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 74
      end: 122
    subjects:
      - backoffice.back_office_audit_log_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra Cloud back office handbook: OPS-310'
  recorded_at: '2026-06-07T16:10:45.000Z'
tags:
  - bootstrap
  - knowledge-source:backoffice-decisions
  - component:backoffice
rationale: The query is passed in a URL, and longer ones were cut by proxies on the way.
id: REQ-backoffice-back-office-audit-log-search-query-length
type: req
---
A query in the back office audit log search is limited to 500 characters; longer input is rejected with a validation error.

## Context

The query is passed in a URL, and longer ones were cut by proxies on the way.

## Why this changed

Reason not stated. OPS-310 replaces the value recorded in OPS-255 without saying why it changed.

## Source

> feat(backoffice): limit search query length to 500 (OPS-310)

Source: Papra Cloud back office handbook - OPS-310
