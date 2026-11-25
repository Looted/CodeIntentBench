---
title: NEWSLETTER_SIGNING_KEY is rotated every 365 days; the previous value stays valid for 48 hours after a rotation.
status: active
semantic_text: NEWSLETTER_SIGNING_KEY is rotated every 365 days; the previous value stays valid for 48 hours after a rotation.
semantic_clauses:
  - NEWSLETTER_SIGNING_KEY is rotated every 365 days
  - the previous value stays valid for 48 hours after a rotation
logic_claims:
  - CLAIM-F1F9CE8C3C5BFA7A
  - CLAIM-40B0302E57698F6D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b164a4b05f649fdcdf61a5514081d8f231b5375b4f87580dd25cbd3bd6e88e60
semantic_inventory:
  - claim_key: CLAIM-F1F9CE8C3C5BFA7A
    claim_text: NEWSLETTER_SIGNING_KEY is rotated every 365 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 48
    subjects:
      - website.newsletter_signing_key
  - claim_key: CLAIM-40B0302E57698F6D
    claim_text: the previous value stays valid for 48 hours after a rotation
    role: descriptive
    status: modeled
    span:
      start: 50
      end: 110
    subjects:
      - website.newsletter_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-291'
  recorded_at: '2025-05-24T16:13:31.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Without an overlap, a rotation of the unsubscribe-link signing key broke requests already on their way.
id: REQ-website-newsletter-signing-key-rotation
type: req
---
NEWSLETTER_SIGNING_KEY is rotated every 365 days; the previous value stays valid for 48 hours after a rotation.

## Context

Without an overlap, a rotation of the unsubscribe-link signing key broke requests already on their way.

## Source

> chore(website): rotate NEWSLETTER_SIGNING_KEY every 365 days (WEB-291)

Source: Marketing website decision log (apps/website) - WEB-291
