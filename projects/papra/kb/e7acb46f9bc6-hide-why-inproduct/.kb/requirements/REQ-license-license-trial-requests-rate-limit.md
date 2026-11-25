---
title: At most 20 requests per IP address per hour are accepted in license trial requests.
status: active
semantic_text: At most 20 requests per IP address per hour are accepted in license trial requests.
semantic_clauses:
  - At most 20 requests per IP address per hour are accepted in license trial requests
logic_claims:
  - CLAIM-BA3ADB47805C9711
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 67adb32819c8fce626d61754c1336719de7ef6e61bb61965be78e016361ae59b
semantic_inventory:
  - claim_key: CLAIM-BA3ADB47805C9711
    claim_text: At most 20 requests per IP address per hour are accepted in license trial requests
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 82
    subjects:
      - license.license_trial_requests
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-119'
  recorded_at: '2026-08-17T09:31:31.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
id: REQ-license-license-trial-requests-rate-limit
type: req
---
At most 20 requests per IP address per hour are accepted in license trial requests.

## Context

Reason not stated.

## Source

> feat(license): rate limit license trial requests (LIC-119)

Source: License server decision log - LIC-119
