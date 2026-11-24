---
title: Addresses from disposable-mail domains are refused in license trial requests; a domain on the block list is refused even when it is also on the allowed list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in license trial requests; a domain on the block list is refused even when it is also on the allowed list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in license trial requests
  - a domain on the block list is refused even when it is also on the allowed list
logic_claims:
  - CLAIM-C6418010C75A4D94
  - CLAIM-0D5093478D80516F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 02c805695545367f56cde62be21e6fef568d8882b7afa304a5e3079b1f534c5e
semantic_inventory:
  - claim_key: CLAIM-C6418010C75A4D94
    claim_text: Addresses from disposable-mail domains are refused in license trial requests
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - license.license_trial_requests
  - claim_key: CLAIM-0D5093478D80516F
    claim_text: a domain on the block list is refused even when it is also on the allowed list
    role: normative
    status: modeled
    span:
      start: 78
      end: 156
    subjects:
      - license.license_trial_requests
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'License server decision log: LIC-162'
  recorded_at: '2025-04-25T16:05:13.000Z'
tags:
  - bootstrap
  - knowledge-source:license-decisions
  - component:license
rationale: Disposable addresses made up most of the abuse reports.
id: REQ-license-license-trial-requests-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in license trial requests; a domain on the block list is refused even when it is also on the allowed list.

## Context

Disposable addresses made up most of the abuse reports.

## Source

> feat(license): block disposable email domains (LIC-162)

Source: License server decision log - LIC-162
