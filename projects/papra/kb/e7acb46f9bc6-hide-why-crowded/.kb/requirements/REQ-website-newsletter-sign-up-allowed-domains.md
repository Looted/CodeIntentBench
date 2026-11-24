---
title: When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted; matching ignores…
status: active
semantic_text: When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted
  - matching ignores letter case
logic_claims:
  - CLAIM-14DCF8F4B58C095B
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 871d42ed5159bcb2b3cf071bcdaf0b6d189ee81fe2f56b2563228a2ef7181f4c
semantic_inventory:
  - claim_key: CLAIM-14DCF8F4B58C095B
    claim_text: When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted
    role: condition
    status: modeled
    span:
      start: 0
      end: 138
    subjects:
      - website.newsletter_sign_up
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 140
      end: 168
    subjects:
      - website.newsletter_sign_up
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-313'
  recorded_at: '2026-05-10T10:01:15.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A listed domain says nothing about who controls its subdomains.
id: REQ-website-newsletter-sign-up-allowed-domains
type: req
---
When an allowed-domain list is configured for the newsletter sign-up form, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.

## Context

A listed domain says nothing about who controls its subdomains.

## Source

> feat(website): allowed email domains for newsletter sign-up (WEB-313)

Source: Marketing website decision log (apps/website) - WEB-313
