---
title: A password reset link for newsletter preference accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for newsletter preference accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for newsletter preference accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-3F2524AA5DD4639A
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 17397a1f35e025fecfbf11f6a839a3dfd58b19713f28c8e9cd11cd2c776bb72b
semantic_inventory:
  - claim_key: CLAIM-3F2524AA5DD4639A
    claim_text: A password reset link for newsletter preference accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 67
    subjects:
      - website.newsletter_preference_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 69
      end: 119
    subjects:
      - website.newsletter_preference_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Marketing website decision log (apps/website): WEB-462'
  recorded_at: '2026-04-14T11:04:59.000Z'
tags:
  - bootstrap
  - knowledge-source:website-decisions
  - component:website
id: REQ-website-newsletter-preference-accounts-reset-link-single-use
type: req
---
A password reset link for newsletter preference accounts works once; requesting a new link invalidates the earlier ones.

## Context

Reason not stated.

## Source

> feat(website): single-use reset links (WEB-462)

Source: Marketing website decision log (apps/website) - WEB-462
