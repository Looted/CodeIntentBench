---
title: At most 20 requests per IP address per day are accepted in education discount requests.
status: active
semantic_text: At most 20 requests per IP address per day are accepted in education discount requests.
semantic_clauses:
  - At most 20 requests per IP address per day are accepted in education discount requests
logic_claims:
  - CLAIM-6D3D44FFD43090E9
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 69232759751839e448499dae100b8931147e7c9669a06efbecbede618d451f9d
semantic_inventory:
  - claim_key: CLAIM-6D3D44FFD43090E9
    claim_text: At most 20 requests per IP address per day are accepted in education discount requests
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - education.education_discount_requests
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Education programme portal notes: EDU-199'
  recorded_at: '2025-12-22T15:51:50.000Z'
tags:
  - bootstrap
  - knowledge-source:education-decisions
  - component:education
rationale: A script had submitted the form several thousand times in a night.
id: REQ-education-education-discount-requests-rate-limit
type: req
---
At most 20 requests per IP address per day are accepted in education discount requests.

## Context

A script had submitted the form several thousand times in a night.

## Source

> feat(education): rate limit education discount requests (EDU-199)

Source: Education programme portal notes - EDU-199
