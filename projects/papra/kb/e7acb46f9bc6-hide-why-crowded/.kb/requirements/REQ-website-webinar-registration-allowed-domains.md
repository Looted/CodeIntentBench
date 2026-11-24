---
title: When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted; matching ignores letter…
status: active
semantic_text: When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.
semantic_clauses:
  - When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted
  - matching ignores letter case
logic_claims:
  - CLAIM-FAC9D165DA32FA6A
  - CLAIM-77F80A293A9D87BD
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0181e065e301bef3b18c17550cab513fcb379f823fc1d8585ff3244559ac7c5b
semantic_inventory:
  - claim_key: CLAIM-FAC9D165DA32FA6A
    claim_text: When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted
    role: condition
    status: modeled
    span:
      start: 0
      end: 131
    subjects:
      - website.webinar_registration
  - claim_key: CLAIM-77F80A293A9D87BD
    claim_text: matching ignores letter case
    role: descriptive
    status: modeled
    span:
      start: 133
      end: 161
    subjects:
      - website.webinar_registration
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-380'
  recorded_at: '2026-06-20T11:27:03.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A listed domain says nothing about who controls its subdomains.
id: REQ-website-webinar-registration-allowed-domains
type: req
---
When an allowed-domain list is configured for webinar registration, only addresses whose domain is exactly on the list are accepted; matching ignores letter case.

## Context

A listed domain says nothing about who controls its subdomains.

## Source

> feat(website): allowed email domains for webinar registration (WEB-380)

Source: Marketing website decision log (apps/website) - WEB-380
