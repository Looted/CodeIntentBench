---
title: A newsletter preference account can have at most 1 sessions at a time; signing in beyond that ends the oldest one.
status: active
semantic_text: A newsletter preference account can have at most 1 sessions at a time; signing in beyond that ends the oldest one.
semantic_clauses:
  - A newsletter preference account can have at most 1 sessions at a time
  - signing in beyond that ends the oldest one
logic_claims:
  - CLAIM-DA798F90A1E4CB8C
  - CLAIM-D659683A97EF2AD8
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 23f63ac513bf190b11d4854fe4c651113fd34ab5fc3cf1ef646018152005dee7
semantic_inventory:
  - claim_key: CLAIM-DA798F90A1E4CB8C
    claim_text: A newsletter preference account can have at most 1 sessions at a time
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 69
    subjects:
      - website.newsletter_preference_accounts
  - claim_key: CLAIM-D659683A97EF2AD8
    claim_text: signing in beyond that ends the oldest one
    role: descriptive
    status: modeled
    span:
      start: 71
      end: 113
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-380'
  recorded_at: '2026-01-10T09:24:43.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-newsletter-preference-accounts-concurrent-sessions
type: req
---
A newsletter preference account can have at most 1 sessions at a time; signing in beyond that ends the oldest one.

## Context

Reason not stated.

## Source

> feat(website): limit concurrent sessions (WEB-380)

Source: Marketing website decision log (apps/website) - WEB-380
