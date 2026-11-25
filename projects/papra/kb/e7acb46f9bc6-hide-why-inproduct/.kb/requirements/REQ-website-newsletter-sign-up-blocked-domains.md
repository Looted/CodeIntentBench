---
title: Addresses from disposable-mail domains are refused in the newsletter sign-up form; a domain on the block list is refused even when it is also on the allowed…
status: active
semantic_text: Addresses from disposable-mail domains are refused in the newsletter sign-up form; a domain on the block list is refused even when it is also on the allowed list.
semantic_clauses:
  - Addresses from disposable-mail domains are refused in the newsletter sign-up form
  - a domain on the block list is refused even when it is also on the allowed list
logic_claims:
  - CLAIM-0C9B274F863B5FB8
  - CLAIM-0D5093478D80516F
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 59bb3fb06bafe6b59cca2ccfb09ffa98d7c9f698715c6f9f094719bddf8b2fb0
semantic_inventory:
  - claim_key: CLAIM-0C9B274F863B5FB8
    claim_text: Addresses from disposable-mail domains are refused in the newsletter sign-up form
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 81
    subjects:
      - website.newsletter_sign_up
  - claim_key: CLAIM-0D5093478D80516F
    claim_text: a domain on the block list is refused even when it is also on the allowed list
    role: normative
    status: modeled
    span:
      start: 83
      end: 161
    subjects:
      - website.newsletter_sign_up
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-235'
  recorded_at: '2026-01-10T15:45:15.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-newsletter-sign-up-blocked-domains
type: req
---
Addresses from disposable-mail domains are refused in the newsletter sign-up form; a domain on the block list is refused even when it is also on the allowed list.

## Context

Reason not stated.

## Source

> feat(website): block disposable email domains (WEB-235)

Source: Marketing website decision log (apps/website) - WEB-235
