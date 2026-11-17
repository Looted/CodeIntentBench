---
title: The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY.
status: active
semantic_text: The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY.
semantic_clauses:
  - The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY
logic_claims:
  - CLAIM-27BD6EEDF8EC6160
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 65263fb4ee603435cc84ca650329e1e99fd688a1212c7e27ec126480362fbe0d
semantic_inventory:
  - claim_key: CLAIM-27BD6EEDF8EC6160
    claim_text: The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 84
    subjects:
      - website.newsletter_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-285'
  recorded_at: '2026-06-22T12:02:20.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Starting without the unsubscribe-link signing key meant every value signed before the restart stopped verifying.
id: REQ-website-newsletter-signing-key-required-in-production
type: req
---
The newsletter service refuses to start in production without NEWSLETTER_SIGNING_KEY.

## Context

Starting without the unsubscribe-link signing key meant every value signed before the restart stopped verifying.

## Source

> feat(website): require NEWSLETTER_SIGNING_KEY in production (WEB-285)

Source: Marketing website decision log (apps/website) - WEB-285
