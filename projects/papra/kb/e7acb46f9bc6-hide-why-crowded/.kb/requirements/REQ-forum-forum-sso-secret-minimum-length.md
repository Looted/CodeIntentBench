---
title: FORUM_SSO_SECRET must be at least 32 characters long.
status: active
semantic_text: FORUM_SSO_SECRET must be at least 32 characters long.
semantic_clauses:
  - FORUM_SSO_SECRET must be at least 32 characters long
logic_claims:
  - CLAIM-E16EDD233631E8A3
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 0fd3ab54285595da6bb80910469df9bda5a2174a397a862eb7d3b25b97e013c3
semantic_inventory:
  - claim_key: CLAIM-E16EDD233631E8A3
    claim_text: FORUM_SSO_SECRET must be at least 32 characters long
    role: normative
    status: modeled
    span:
      start: 0
      end: 52
    subjects:
      - forum.forum_sso_secret
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-228'
  recorded_at: '2025-03-25T17:18:11.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-sso-secret-minimum-length
type: req
---
FORUM_SSO_SECRET must be at least 32 characters long.

## Context

Reason not stated.

## Source

> feat(forum): FORUM_SSO_SECRET minimum length 32 (FRM-228)

Source: Community forum operations notes - FRM-228
