---
title: A browser profile can have at most 10 connected organizations in the browser extension; the limit is the same for everyone.
status: active
semantic_text: A browser profile can have at most 10 connected organizations in the browser extension; the limit is the same for everyone.
semantic_clauses:
  - A browser profile can have at most 10 connected organizations in the browser extension
  - the limit is the same for everyone
logic_claims:
  - CLAIM-DFA38BD6AEEC9740
  - CLAIM-950BC8C0A4D47D22
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c3b719855fd85eee215517a7a21c8ea9c1d23adfb41a65d32acaab49d0042af2
semantic_inventory:
  - claim_key: CLAIM-DFA38BD6AEEC9740
    claim_text: A browser profile can have at most 10 connected organizations in the browser extension
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 86
    subjects:
      - extension.connected_organizations
  - claim_key: CLAIM-950BC8C0A4D47D22
    claim_text: the limit is the same for everyone
    role: descriptive
    status: modeled
    span:
      start: 88
      end: 122
    subjects:
      - extension.connected_organizations
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Browser extension decision log: EXT-298'
  recorded_at: '2026-08-10T13:00:26.000Z'
tags:
  - bootstrap
  - knowledge-source:extension-decisions
  - component:extension
rationale: A handful of accounts had created thousands of connected organizations and slowed the listing for everyone.
id: REQ-extension-connected-organizations-maximum-count
type: req
---
A browser profile can have at most 10 connected organizations in the browser extension; the limit is the same for everyone.

## Context

A handful of accounts had created thousands of connected organizations and slowed the listing for everyone.

## Source

> feat(extension): limit connected organizations per browser profile (EXT-298)

Source: Browser extension decision log - EXT-298
