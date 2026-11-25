---
title: Anyone can sign up with an email address on any domain.
status: closed
semantic_text: Anyone can sign up with an email address on any domain.
semantic_clauses:
  - Anyone can sign up with an email address on any domain
logic_claims:
  - CLAIM-054BE0632027D822
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b2276767324df523ee87293868629f1bd2e5a814f64d9942e58611f0759c2c43
semantic_inventory:
  - claim_key: CLAIM-054BE0632027D822
    claim_text: Anyone can sign up with an email address on any domain
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 54
    subjects:
      - auth.signup_email_domains
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server decision log: SRV-081'
  recorded_at: '2025-02-24T12:05:47.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-decisions
  - component:auth
id: REQ-papra-signup-any-email-domain
type: req
---
Anyone can sign up with an email address on any domain.

## Context

Reason not stated.

## Source

> Sign-up is open to every email domain. (SRV-081)

Source: Papra server decision log - SRV-081
