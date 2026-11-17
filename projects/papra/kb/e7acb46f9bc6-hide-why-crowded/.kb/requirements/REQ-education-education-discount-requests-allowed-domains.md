---
title: When an allowed-domain list is configured for education discount requests, only addresses whose domain is exactly on the list are accepted; matching ignores…
status: active
semantic_text: When an allowed-domain list is configured for education discount requests, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for education discount requests, only addresses whose domain is exactly on the list are accepted
  - matching ignores letter case
logic_claims:
  - CLAIM-6D0A210083A7EBBD
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: db3825a1e8e791905fe10b5a36dddb1dd168716f4bba2b91b43446ba59d69620
semantic_inventory:
  - claim_key: CLAIM-6D0A210083A7EBBD
    claim_text: When an allowed-domain list is configured for education discount requests, only addresses whose domain is exactly on the list are accepted
    role: condition
    status: modeled
    span:
      start: 0
      end: 138
    subjects:
      - education.education_discount_requests
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 140
      end: 168
    subjects:
      - education.education_discount_requests
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-183'
  recorded_at: '2026-03-13T13:33:11.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: A listed domain says nothing about who controls its subdomains.
id: REQ-education-education-discount-requests-allowed-domains
type: req
---
When an allowed-domain list is configured for education discount requests, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.

## Context

A listed domain says nothing about who controls its subdomains.

## Source

> feat(education): allowed email domains for education discount requests (EDU-183)

Source: Education programme portal notes - EDU-183
