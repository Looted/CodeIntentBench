---
title: Addresses from disposable-mail domains are refused in the cloud waiting list; the allowed list wins over the block list.
status: active
semantic_text: Addresses from disposable-mail domains are refused in the cloud waiting list; the allowed list wins over the block list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in the cloud waiting list
  - the allowed list wins over the block list
logic_claims:
  - CLAIM-C7759CFF45AF2F4B
  - CLAIM-FE24FF80C1CD21F2
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: f98351dd8f8f965249b03e6e4a9c16bae3003245990fe668d6fdc371ae51f242
semantic_inventory:
  - claim_key: CLAIM-C7759CFF45AF2F4B
    claim_text: Addresses from disposable-mail domains are refused in the cloud waiting list
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 76
    subjects:
      - website.cloud_waiting_list
  - claim_key: CLAIM-FE24FF80C1CD21F2
    claim_text: the allowed list wins over the block list
    role: descriptive
    status: modeled
    span:
      start: 78
      end: 119
    subjects:
      - website.cloud_waiting_list
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-361'
  recorded_at: '2025-10-03T12:54:43.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Disposable addresses made up most of the abuse reports.
id: REQ-website-cloud-waiting-list-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in the cloud waiting list; the allowed list wins over the block list.

## Context

Disposable addresses made up most of the abuse reports.

## Source

> feat(website): block disposable email domains (WEB-361)

Source: Marketing website decision log (apps/website) - WEB-361
