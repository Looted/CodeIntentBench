---
title: A password reset link for community forum accounts works once; requesting a new link invalidates the earlier ones.
status: active
semantic_text: A password reset link for community forum accounts works once; requesting a new link invalidates the earlier ones.
semantic_clauses:
  - A password reset link for community forum accounts works once
  - requesting a new link invalidates the earlier ones
logic_claims:
  - CLAIM-5149A469F154308A
  - CLAIM-A6758D585E12B6CF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 403d97cdcc3de9e6f12be78f84edb542e5bdd309de76a9db2d0db6a2470bcf6f
semantic_inventory:
  - claim_key: CLAIM-5149A469F154308A
    claim_text: A password reset link for community forum accounts works once
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 61
    subjects:
      - forum.community_forum_accounts
  - claim_key: CLAIM-A6758D585E12B6CF
    claim_text: requesting a new link invalidates the earlier ones
    role: descriptive
    status: modeled
    span:
      start: 63
      end: 113
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-329'
  recorded_at: '2026-08-13T08:41:59.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: An old link found in a mailbox months later still worked.
id: REQ-forum-community-forum-accounts-reset-link-single-use
type: req
---
A password reset link for community forum accounts works once; requesting a new link invalidates the earlier ones.

## Context

An old link found in a mailbox months later still worked.

## Source

> feat(forum): single-use reset links (FRM-329)

Source: Community forum operations notes - FRM-329
