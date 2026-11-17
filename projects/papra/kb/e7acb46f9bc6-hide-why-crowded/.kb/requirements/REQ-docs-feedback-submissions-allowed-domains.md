---
title: When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted; matching i…
status: active
semantic_text: When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted
  - matching ignores letter case
logic_claims:
  - CLAIM-E504F4351BE13864
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 93f8087940bc9eb721c2afc6d002c8e68158471299855c662ac77385a9aaef40
semantic_inventory:
  - claim_key: CLAIM-E504F4351BE13864
    claim_text: When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted
    role: condition
    status: modeled
    span:
      start: 0
      end: 145
    subjects:
      - docs.feedback_submissions
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 147
      end: 175
    subjects:
      - docs.feedback_submissions
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Documentation site decision log (apps/docs): DOC-326'
  recorded_at: '2025-08-17T15:57:14.000Z'
tags:
  - bootstrap
  - knowledge-source:docs-decisions
  - component:docs
rationale: A listed domain says nothing about who controls its subdomains.
id: REQ-docs-feedback-submissions-allowed-domains
type: req
---
When an allowed-domain list is configured for documentation feedback submissions, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.

## Context

A listed domain says nothing about who controls its subdomains.

## Source

> feat(docs): allowed email domains for feedback submissions (DOC-326)

Source: Documentation site decision log (apps/docs) - DOC-326
