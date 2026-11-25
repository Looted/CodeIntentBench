---
title: A query in the community forum member search is limited to 500 characters; longer input is rejected with a validation error.
status: active
semantic_text: A query in the community forum member search is limited to 500 characters; longer input is rejected with a validation error.
semantic_clauses:
  - A query in the community forum member search is limited to 500 characters
  - longer input is rejected with a validation error
logic_claims:
  - CLAIM-C7635C637510CD27
  - CLAIM-778F39B5CA222673
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: b5e56bc7cda68662e04a4c308d7f30cf1317b01b4938db8169a6d6076b33f346
semantic_inventory:
  - claim_key: CLAIM-C7635C637510CD27
    claim_text: A query in the community forum member search is limited to 500 characters
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 73
    subjects:
      - forum.community_forum_member_search
  - claim_key: CLAIM-778F39B5CA222673
    claim_text: longer input is rejected with a validation error
    role: normative
    status: modeled
    span:
      start: 75
      end: 123
    subjects:
      - forum.community_forum_member_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-105'
  recorded_at: '2026-09-13T08:22:08.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: The query is passed in a URL, and longer ones were cut by proxies on the way.
id: REQ-forum-community-forum-member-search-query-length
type: req
---
A query in the community forum member search is limited to 500 characters; longer input is rejected with a validation error.

## Context

The query is passed in a URL, and longer ones were cut by proxies on the way.

## Source

> feat(forum): limit search query length to 500 (FRM-105)

Source: Community forum operations notes - FRM-105
