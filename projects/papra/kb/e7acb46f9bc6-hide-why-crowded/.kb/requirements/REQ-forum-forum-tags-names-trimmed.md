---
title: Forum tag names on the community forum are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
status: active
semantic_text: Forum tag names on the community forum are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Forum tag names on the community forum are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-D60F1398B9A89179
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d72eef09f9bcee94aed2ff6648aca00e110871643a4b29a11292c4faff96e2b8
semantic_inventory:
  - claim_key: CLAIM-D60F1398B9A89179
    claim_text: Forum tag names on the community forum are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 107
    subjects:
      - forum.forum_tags
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 109
      end: 155
    subjects:
      - forum.forum_tags
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-123'
  recorded_at: '2025-10-17T14:51:42.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-tags-names-trimmed
type: req
---
Forum tag names on the community forum are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(forum): trim forum tag names (FRM-123)

Source: Community forum operations notes - FRM-123
