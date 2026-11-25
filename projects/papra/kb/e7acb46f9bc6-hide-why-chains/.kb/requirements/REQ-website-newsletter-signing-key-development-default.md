---
title: The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included.
status: active
semantic_text: The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included.
semantic_clauses:
  - The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included
logic_claims:
  - CLAIM-250A6E120F1E9EE5
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cd88746c58c2dd193f18346ab7bf461da474a977a66986df41f553ea12a38956
semantic_inventory:
  - claim_key: CLAIM-250A6E120F1E9EE5
    claim_text: The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included
    role: normative
    status: modeled
    span:
      start: 0
      end: 97
    subjects:
      - website.newsletter_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-305'
  recorded_at: '2025-05-23T13:49:52.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A development default had been copied into a production configuration.
id: REQ-website-newsletter-signing-key-development-default
type: req
---
The newsletter service requires NEWSLETTER_SIGNING_KEY in every environment, development included.

## Context

A development default had been copied into a production configuration.

## Source

> feat(website): NEWSLETTER_SIGNING_KEY outside production (WEB-305)

Source: Marketing website decision log (apps/website) - WEB-305
