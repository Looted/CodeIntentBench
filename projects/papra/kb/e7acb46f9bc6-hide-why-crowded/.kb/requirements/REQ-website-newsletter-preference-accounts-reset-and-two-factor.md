---
title: Resetting the password of a newsletter preference account does not turn off two-factor authentication.
status: active
semantic_text: Resetting the password of a newsletter preference account does not turn off two-factor authentication.
semantic_clauses:
  - Resetting the password of a newsletter preference account does not turn off two-factor authentication
logic_claims:
  - CLAIM-660E8A76390B41A6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 8dc356856c327a39e10e3523bc5502b72d5a2a511a9fc20c982c5ef9fc217a3c
semantic_inventory:
  - claim_key: CLAIM-660E8A76390B41A6
    claim_text: Resetting the password of a newsletter preference account does not turn off two-factor authentication
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-499'
  recorded_at: '2025-06-11T12:28:59.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: People who lost their phone had no other way back in.
id: REQ-website-newsletter-preference-accounts-reset-and-two-factor
type: req
---
Resetting the password of a newsletter preference account does not turn off two-factor authentication.

## Context

People who lost their phone had no other way back in.

## Source

> feat(website): two-factor after a password reset (WEB-499)

Source: Marketing website decision log (apps/website) - WEB-499
