---
title: A completed password reset for community forum accounts sends no confirmation email.
status: active
semantic_text: A completed password reset for community forum accounts sends no confirmation email.
semantic_clauses:
  - A completed password reset for community forum accounts sends no confirmation email
logic_claims:
  - CLAIM-5945513FD3DF313D
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: da29b7e16b7563dd0223ca9db356637000831f5dbed37e5606cadcd01597d276
semantic_inventory:
  - claim_key: CLAIM-5945513FD3DF313D
    claim_text: A completed password reset for community forum accounts sends no confirmation email
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 83
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-342'
  recorded_at: '2025-02-04T15:37:00.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: The owner should hear about a reset they did not ask for.
id: REQ-forum-community-forum-accounts-reset-notification
type: req
---
A completed password reset for community forum accounts sends no confirmation email.

## Context

The owner should hear about a reset they did not ask for.

## Source

> feat(forum): notify after a password reset (FRM-342)

Source: Community forum operations notes - FRM-342
