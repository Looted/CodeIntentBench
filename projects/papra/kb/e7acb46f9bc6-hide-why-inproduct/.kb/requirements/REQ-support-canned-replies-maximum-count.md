---
title: The number of canned replies per agent in the support portal is limited to 500; the limit is fixed.
status: active
semantic_text: The number of canned replies per agent in the support portal is limited to 500; the limit is fixed.
semantic_clauses:
  - The number of canned replies per agent in the support portal is limited to 500
  - the limit is fixed
logic_claims:
  - CLAIM-4B08F164F9FDB510
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: cf087b2d364de4828ebee1d9b05a3856e751ad673040470df5122f9a894ab2ab
semantic_inventory:
  - claim_key: CLAIM-4B08F164F9FDB510
    claim_text: The number of canned replies per agent in the support portal is limited to 500
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 78
    subjects:
      - support.canned_replies
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 80
      end: 98
    subjects:
      - support.canned_replies
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Support portal decision log: SUP-109'
  recorded_at: '2025-12-18T09:36:19.000Z'
tags:
  - bootstrap
  - knowledge-source:support-decisions
  - component:support
rationale: Lists of canned replies are loaded in one request, and beyond a few hundred the screen became slow.
id: REQ-support-canned-replies-maximum-count
type: req
---
The number of canned replies per agent in the support portal is limited to 500; the limit is fixed.

## Context

Lists of canned replies are loaded in one request, and beyond a few hundred the screen became slow.

## Source

> feat(support): limit canned replies per agent (SUP-109)

Source: Support portal decision log - SUP-109
