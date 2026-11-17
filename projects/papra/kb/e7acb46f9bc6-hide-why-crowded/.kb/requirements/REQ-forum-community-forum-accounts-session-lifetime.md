---
title: Sessions of community forum accounts last at most 14 days; they end after 720 minutes without activity.
status: active
semantic_text: Sessions of community forum accounts last at most 14 days; they end after 720 minutes without activity.
semantic_clauses:
  - Sessions of community forum accounts last at most 14 days
  - they end after 720 minutes without activity
logic_claims:
  - CLAIM-8650ED4CA221194F
  - CLAIM-875C1D77291FFCFF
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 18b085d6f7b1aebc54d6bcc2bec73032455f1a024ea0ee204346675f8370578e
semantic_inventory:
  - claim_key: CLAIM-8650ED4CA221194F
    claim_text: Sessions of community forum accounts last at most 14 days
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 57
    subjects:
      - forum.community_forum_accounts
  - claim_key: CLAIM-875C1D77291FFCFF
    claim_text: they end after 720 minutes without activity
    role: descriptive
    status: modeled
    span:
      start: 59
      end: 102
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-350'
  recorded_at: '2026-01-27T08:38:56.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Shared computers were left signed in.
id: REQ-forum-community-forum-accounts-session-lifetime
type: req
---
Sessions of community forum accounts last at most 14 days; they end after 720 minutes without activity.

## Context

Shared computers were left signed in.

## Source

> feat(forum): session lifetime (FRM-350)

Source: Community forum operations notes - FRM-350
