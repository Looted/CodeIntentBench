---
title: Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refu…
status: active
semantic_text: Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.
semantic_clauses:
  - Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved
  - a name that is empty after trimming is refused
logic_claims:
  - CLAIM-875FCA846AC31DF2
  - CLAIM-70D5F8163A64221A
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: a7e7ad4223815de67b6c427a850b1081e775089511323c07f8f68d995042f1bf
semantic_inventory:
  - claim_key: CLAIM-875FCA846AC31DF2
    claim_text: Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved
    role: normative
    status: modeled
    span:
      start: 0
      end: 112
    subjects:
      - forum.forum_categories
  - claim_key: CLAIM-70D5F8163A64221A
    claim_text: a name that is empty after trimming is refused
    role: descriptive
    status: modeled
    span:
      start: 114
      end: 160
    subjects:
      - forum.forum_categories
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-140'
  recorded_at: '2025-02-06T17:38:20.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
id: REQ-forum-forum-categories-names-trimmed
type: req
---
Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved; a name that is empty after trimming is refused.

## Context

Reason not stated.

## Source

> fix(forum): trim forum category names (FRM-140)

Source: Community forum operations notes - FRM-140
