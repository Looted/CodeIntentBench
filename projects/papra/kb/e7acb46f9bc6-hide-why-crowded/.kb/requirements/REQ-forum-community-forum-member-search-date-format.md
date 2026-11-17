---
title: 'The joined: filter of the community forum member search accepts dates as YYYY-MM-DD and as YYYY/MM/DD.'
status: active
semantic_text: 'The joined: filter of the community forum member search accepts dates as YYYY-MM-DD and as YYYY/MM/DD.'
semantic_clauses:
  - 'The joined: filter of the community forum member search accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
logic_claims:
  - CLAIM-6818269FAFAD2326
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d16410e997c4469968aa92ce5799ab061790422a06d453d03cc9dec43936aa77
semantic_inventory:
  - claim_key: CLAIM-6818269FAFAD2326
    claim_text: 'The joined: filter of the community forum member search accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 101
    subjects:
      - forum.community_forum_member_search
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Community forum operations notes: FRM-212'
  recorded_at: '2025-10-15T11:08:46.000Z'
tags:
  - bootstrap
  - knowledge-source:forum-decisions
  - component:forum
rationale: A date like 03/04 means two different days to two halves of the team.
id: REQ-forum-community-forum-member-search-date-format
type: req
---
The joined: filter of the community forum member search accepts dates as YYYY-MM-DD and as YYYY/MM/DD.

## Context

A date like 03/04 means two different days to two halves of the team.

## Source

> feat(forum): date formats of the joined: filter (FRM-212)

Source: Community forum operations notes - FRM-212
