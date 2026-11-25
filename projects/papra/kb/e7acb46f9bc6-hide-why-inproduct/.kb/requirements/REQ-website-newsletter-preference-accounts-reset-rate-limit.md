---
title: At most 3 password reset emails are sent per account per day for newsletter preference accounts.
status: active
semantic_text: At most 3 password reset emails are sent per account per day for newsletter preference accounts.
semantic_clauses:
  - At most 3 password reset emails are sent per account per day for newsletter preference accounts
logic_claims:
  - CLAIM-2DBFA3E71C17A098
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 3923e0b069b6b911e45c400fb8ec7a203fe1dbd90691a21d3dc153cedf4f95b7
semantic_inventory:
  - claim_key: CLAIM-2DBFA3E71C17A098
    claim_text: At most 3 password reset emails are sent per account per day for newsletter preference accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 95
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-355'
  recorded_at: '2026-09-01T17:01:26.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: The reset form had been used to flood a mailbox.
id: REQ-website-newsletter-preference-accounts-reset-rate-limit
type: req
---
At most 3 password reset emails are sent per account per day for newsletter preference accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(website): limit reset emails (WEB-355)

Source: Marketing website decision log (apps/website) - WEB-355
