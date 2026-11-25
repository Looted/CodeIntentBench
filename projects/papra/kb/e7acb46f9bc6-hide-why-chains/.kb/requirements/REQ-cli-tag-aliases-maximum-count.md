---
title: At most 50 tag aliases can be created per mapping file in the papra CLI; the limit is fixed.
status: active
semantic_text: At most 50 tag aliases can be created per mapping file in the papra CLI; the limit is fixed.
semantic_clauses:
  - At most 50 tag aliases can be created per mapping file in the papra CLI
  - the limit is fixed
logic_claims:
  - CLAIM-35D2D1A7C07E0983
  - CLAIM-9B85215C347D6099
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: d6f01dce03e0cfc212e6210d1b3e073c39708fd4a02f6cef760bcae9223523b2
semantic_inventory:
  - claim_key: CLAIM-35D2D1A7C07E0983
    claim_text: At most 50 tag aliases can be created per mapping file in the papra CLI
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 71
    subjects:
      - cli.tag_aliases
  - claim_key: CLAIM-9B85215C347D6099
    claim_text: the limit is fixed
    role: descriptive
    status: modeled
    span:
      start: 73
      end: 91
    subjects:
      - cli.tag_aliases
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'CLI design notes (packages/cli): CLI-108'
  recorded_at: '2025-09-13T10:14:39.000Z'
tags:
  - bootstrap
  - knowledge-source:cli-decisions
  - component:cli
id: REQ-cli-tag-aliases-maximum-count
type: req
---
At most 50 tag aliases can be created per mapping file in the papra CLI; the limit is fixed.

## Context

Reason not stated.

## Source

> feat(cli): limit tag aliases per mapping file (CLI-108)

Source: CLI design notes (packages/cli) - CLI-108
