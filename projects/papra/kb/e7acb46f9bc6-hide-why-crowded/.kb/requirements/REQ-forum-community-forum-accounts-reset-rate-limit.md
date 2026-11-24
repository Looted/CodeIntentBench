---
title: At most 5 password reset emails are sent per account per hour for community forum accounts.
status: active
semantic_text: At most 5 password reset emails are sent per account per hour for community forum accounts.
semantic_clauses:
  - At most 5 password reset emails are sent per account per hour for community forum accounts
logic_claims:
  - CLAIM-C36922A2D74A0D41
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 2c74e2727ccf746021d05a76c9a73a9813239e37bda8e61788350dbf6d3d78c1
semantic_inventory:
  - claim_key: CLAIM-C36922A2D74A0D41
    claim_text: At most 5 password reset emails are sent per account per hour for community forum accounts
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 90
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-332'
  recorded_at: '2026-08-15T08:22:14.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: The reset form had been used to flood a mailbox.
id: REQ-forum-community-forum-accounts-reset-rate-limit
type: req
---
At most 5 password reset emails are sent per account per hour for community forum accounts.

## Context

The reset form had been used to flood a mailbox.

## Source

> feat(forum): limit reset emails (FRM-332)

Source: Community forum operations notes - FRM-332
