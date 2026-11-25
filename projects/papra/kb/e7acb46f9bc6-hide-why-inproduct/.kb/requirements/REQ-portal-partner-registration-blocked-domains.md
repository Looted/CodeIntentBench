---
title: Addresses from disposable-mail domains are refused in partner portal registration; a domain on the block list is refused even when it is also on the allowed…
status: active
semantic_text: Addresses from disposable-mail domains are refused in partner portal registration; a domain on the block list is refused even when it is also on the allowed list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in partner portal registration
  - a domain on the block list is refused even when it is also on the allowed list
logic_claims:
  - CLAIM-36BEC223ADDE275A
  - CLAIM-0D5093478D80516F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 750e5b61e64a1b60bbf1f618a2824c9ef411f8e27ea1a6b3ac0884ad12fe01c3
semantic_inventory:
  - claim_key: CLAIM-36BEC223ADDE275A
    claim_text: Addresses from disposable-mail domains are refused in partner portal registration
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - portal.partner_registration
  - claim_key: CLAIM-0D5093478D80516F
    claim_text: a domain on the block list is refused even when it is also on the allowed list
    role: normative
    status: modeled
    span:
      start: 83
      end: 161
    subjects:
      - portal.partner_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Partner portal decision log: PRT-195'
  recorded_at: '2026-03-02T13:28:00.000Z'
tags:
  - bootstrap
  - knowledge-source:portal-decisions
  - component:portal
id: REQ-portal-partner-registration-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in partner portal registration; a domain on the block list is refused even when it is also on the allowed list.

## Context

Reason not stated.

## Source

> feat(portal): block disposable email domains (PRT-195)

Source: Partner portal decision log - PRT-195
