---
title: A completed password reset for newsletter preference accounts sends no confirmation email.
status: active
semantic_text: A completed password reset for newsletter preference accounts sends no confirmation email.
semantic_clauses:
  - A completed password reset for newsletter preference accounts sends no confirmation email
logic_claims:
  - CLAIM-8E58590F8FE9703D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2a4548fb444867b7d0c434c2f6853cb12a753778ec7c59bf0ac260f1101b696a
semantic_inventory:
  - claim_key: CLAIM-8E58590F8FE9703D
    claim_text: A completed password reset for newsletter preference accounts sends no confirmation email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 89
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-365'
  recorded_at: '2026-04-09T10:47:35.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: The owner should hear about a reset they did not ask for.
id: REQ-website-newsletter-preference-accounts-reset-notification
type: req
---
A completed password reset for newsletter preference accounts sends no confirmation email.

## Context

The owner should hear about a reset they did not ask for.

## Source

> feat(website): notify after a password reset (WEB-365)

Source: Marketing website decision log (apps/website) - WEB-365
