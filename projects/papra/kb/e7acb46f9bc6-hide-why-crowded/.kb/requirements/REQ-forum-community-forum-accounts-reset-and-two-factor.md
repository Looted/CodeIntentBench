---
title: Resetting the password of a community forum account turns off two-factor authentication, which must be set up again.
status: active
semantic_text: Resetting the password of a community forum account turns off two-factor authentication, which must be set up again.
semantic_clauses:
  - Resetting the password of a community forum account turns off two-factor authentication, which must be set up again
logic_claims:
  - CLAIM-16D2B71970496D4A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: c7f1d31f31fdf56eb3e652697e7dcdc6f2dbc771f667b3fbc9e34d83e50047d8
semantic_inventory:
  - claim_key: CLAIM-16D2B71970496D4A
    claim_text: Resetting the password of a community forum account turns off two-factor authentication, which must be set up again
    role: normative
    status: modeled
    span:
      start: 0
      end: 115
    subjects:
      - forum.community_forum_accounts
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-360'
  recorded_at: '2025-03-27T11:46:52.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: Otherwise a mailbox alone would be enough to get past the second factor.
id: REQ-forum-community-forum-accounts-reset-and-two-factor
type: req
---
Resetting the password of a community forum account turns off two-factor authentication, which must be set up again.

## Context

Otherwise a mailbox alone would be enough to get past the second factor.

## Source

> feat(forum): two-factor after a password reset (FRM-360)

Source: Community forum operations notes - FRM-360
