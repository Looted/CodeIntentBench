---
title: The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file.
status: active
semantic_text: The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file.
semantic_clauses:
  - The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file
logic_claims:
  - CLAIM-982062C884E3D6A7
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: ee287dd68484b250959a39c892a15fbfb226ef6741e62d5f2f307364e988560d
semantic_inventory:
  - claim_key: CLAIM-982062C884E3D6A7
    claim_text: The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 110
    subjects:
      - website.newsletter_signing_key
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-294'
  recorded_at: '2025-08-09T15:21:08.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
rationale: Configuration files end up in backups and in support tickets.
id: REQ-website-newsletter-signing-key-source
type: req
---
The newsletter service reads NEWSLETTER_SIGNING_KEY from the environment only, never from a configuration file.

## Context

Configuration files end up in backups and in support tickets.

## Source

> feat(website): where NEWSLETTER_SIGNING_KEY is read from (WEB-294)

Source: Marketing website decision log (apps/website) - WEB-294
