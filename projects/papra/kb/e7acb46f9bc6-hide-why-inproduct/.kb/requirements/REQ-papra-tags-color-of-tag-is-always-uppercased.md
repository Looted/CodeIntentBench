---
title: The color of a tag is always uppercased.
status: active
semantic_text: The color of a tag is always uppercased.
semantic_clauses:
  - The color of a tag is always uppercased
logic_claims:
  - CLAIM-E3615AC7FEF0CFF6
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e1640affe291795ded16acbf3826d9a98e6aac6b92f72c189aefe3982d64adbb
semantic_inventory:
  - claim_key: CLAIM-E3615AC7FEF0CFF6
    claim_text: The color of a tag is always uppercased
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 39
    subjects:
      - tags.tag_color_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1846'
  recorded_at: '2025-03-09T14:17:12.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-color-of-tag-is-always-uppercased
type: req
---
The color of a tag is always uppercased.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.schemas.test.ts (tags schemas > tagColorSchema).

## Source

Source: Papra server behaviour notes - SRV-1846
