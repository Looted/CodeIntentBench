---
title: Passwords of community forum accounts are at least 8 characters long; there is no rule about character classes.
status: active
semantic_text: Passwords of community forum accounts are at least 8 characters long; there is no rule about character classes.
semantic_clauses:
  - Passwords of community forum accounts are at least 8 characters long
  - there is no rule about character classes
logic_claims:
  - CLAIM-99DD0CB666B6A1CA
  - CLAIM-3BB7AA89852B2146
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e8ecb429df4b20ad1a9f9029f4beeabbd666dcd25b8d1da1ab4532cf0140f25c
semantic_inventory:
  - claim_key: CLAIM-99DD0CB666B6A1CA
    claim_text: Passwords of community forum accounts are at least 8 characters long
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 68
    subjects:
      - forum.community_forum_accounts
  - claim_key: CLAIM-3BB7AA89852B2146
    claim_text: there is no rule about character classes
    role: descriptive
    status: modeled
    span:
      start: 70
      end: 110
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-358'
  recorded_at: '2025-10-17T12:54:46.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-community-forum-accounts-password-length
type: req
---
Passwords of community forum accounts are at least 8 characters long; there is no rule about character classes.

## Context

Reason not stated.

## Source

> feat(forum): password minimum length 8 (FRM-358)

Source: Community forum operations notes - FRM-358
