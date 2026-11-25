---
title: When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well; matching ignores letter case.
status: active
semantic_text: When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well
  - matching ignores letter case
logic_claims:
  - CLAIM-D099BE40CCD3DE56
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 9b66db45347615cadbbe1e40f972b88d88a0f6c5afdb47b4882a45c3917ebb47
semantic_inventory:
  - claim_key: CLAIM-D099BE40CCD3DE56
    claim_text: When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well
    role: condition
    status: modeled
    span:
      start: 0
      end: 120
    subjects:
      - license.license_trial_requests
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 122
      end: 150
    subjects:
      - license.license_trial_requests
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-161'
  recorded_at: '2026-08-27T09:05:02.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Companies with regional subdomains asked for one entry to cover all of them.
id: REQ-license-license-trial-requests-allowed-domains
type: req
---
When an allowed-domain list is configured for license trial requests, subdomains of a listed domain are accepted as well; matching ignores letter case.

## Context

Companies with regional subdomains asked for one entry to cover all of them.

## Source

> feat(license): allowed email domains for license trial requests (LIC-161)

Source: License server decision log - LIC-161
