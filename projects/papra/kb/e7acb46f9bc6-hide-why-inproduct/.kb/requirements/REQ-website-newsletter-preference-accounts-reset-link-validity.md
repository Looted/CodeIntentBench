---
title: Password reset links for newsletter preference accounts are valid for 20 minutes.
status: active
semantic_text: Password reset links for newsletter preference accounts are valid for 20 minutes.
semantic_clauses:
  - Password reset links for newsletter preference accounts are valid for 20 minutes
logic_claims:
  - CLAIM-AB20E897158AC4F0
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 27dc162f1443dcaa1476e41179ccca8f9baf32a86b89e680e085e09bf9b00058
semantic_inventory:
  - claim_key: CLAIM-AB20E897158AC4F0
    claim_text: Password reset links for newsletter preference accounts are valid for 20 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 80
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-346'
  recorded_at: '2026-08-15T08:45:11.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-website-newsletter-preference-accounts-reset-link-validity
type: req
---
Password reset links for newsletter preference accounts are valid for 20 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Why this changed

Reason not stated. WEB-346 replaces the value recorded in WEB-306 without saying why it changed.

## Source

> feat(website): reset links valid 20 minutes (WEB-346)

Source: Marketing website decision log (apps/website) - WEB-346
