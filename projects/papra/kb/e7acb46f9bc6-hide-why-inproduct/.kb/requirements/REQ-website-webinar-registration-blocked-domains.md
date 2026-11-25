---
title: Addresses from disposable-mail domains are refused in webinar registration; a domain on the block list is refused even when it is also on the allowed list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in webinar registration; a domain on the block list is refused even when it is also on the allowed list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in webinar registration
  - a domain on the block list is refused even when it is also on the allowed list
logic_claims:
  - CLAIM-05E87B7D23A390EB
  - CLAIM-0D5093478D80516F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e30523f904e59cd659268dff51ad6c64911fe7fdd75ecfe314328b752006585d
semantic_inventory:
  - claim_key: CLAIM-05E87B7D23A390EB
    claim_text: Addresses from disposable-mail domains are refused in webinar registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - website.webinar_registration
  - claim_key: CLAIM-0D5093478D80516F
    claim_text: a domain on the block list is refused even when it is also on the allowed list
    role: normative
    status: modeled
    span:
      start: 76
      end: 154
    subjects:
      - website.webinar_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-280'
  recorded_at: '2025-06-07T12:37:19.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Disposable addresses made up most of the abuse reports.
id: REQ-website-webinar-registration-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in webinar registration; a domain on the block list is refused even when it is also on the allowed list.

## Context

Disposable addresses made up most of the abuse reports.

## Source

> feat(website): block disposable email domains (WEB-280)

Source: Marketing website decision log (apps/website) - WEB-280
