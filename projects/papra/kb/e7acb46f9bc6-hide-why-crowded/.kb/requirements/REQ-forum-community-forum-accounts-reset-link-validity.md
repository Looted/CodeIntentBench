---
title: Password reset links for community forum accounts are valid for 30 minutes.
status: active
semantic_text: Password reset links for community forum accounts are valid for 30 minutes.
semantic_clauses:
  - Password reset links for community forum accounts are valid for 30 minutes
logic_claims:
  - CLAIM-3F58172E0F174B59
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: 29f3e1b7f3e1f8f3db0db4b0cf6be481674f19484d8e4b0a4f1e62e35e9b5bd7
semantic_inventory:
  - claim_key: CLAIM-3F58172E0F174B59
    claim_text: Password reset links for community forum accounts are valid for 30 minutes
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 74
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-324'
  recorded_at: '2025-09-25T09:30:18.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: A link in a mailbox is as good as the password for as long as it works.
id: REQ-forum-community-forum-accounts-reset-link-validity
type: req
---
Password reset links for community forum accounts are valid for 30 minutes.

## Context

A link in a mailbox is as good as the password for as long as it works.

## Source

> feat(forum): reset links valid 30 minutes (FRM-324)

Source: Community forum operations notes - FRM-324
