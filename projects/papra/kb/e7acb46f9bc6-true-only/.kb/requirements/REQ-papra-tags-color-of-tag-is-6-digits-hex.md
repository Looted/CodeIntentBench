---
title: The color of a tag is a 6 digits hex color code.
status: active
semantic_text: The color of a tag is a 6 digits hex color code.
semantic_clauses:
  - The color of a tag is a 6 digits hex color code
logic_claims:
  - CLAIM-734FE772360EB57C
semantic_inventory_version: kibi.semantic-inventory.v1
semantic_source_field: semantic_text
semantic_source_hash: e57170c1f9d9c0a5aa1940aea2ac21b2c13bd4fb138f768643e257c94b417d36
semantic_inventory:
  - claim_key: CLAIM-734FE772360EB57C
    claim_text: The color of a tag is a 6 digits hex color code
    role: descriptive
    status: modeled
    span:
      start: 0
      end: 47
    subjects:
      - tags.tag_color_schema
firmness: firm
required_evidence: asserted
origin:
  kind: import
  ref: 'Papra server behaviour notes: SRV-1844'
  recorded_at: '2026-04-06T14:39:03.000Z'
tags:
  - bootstrap
  - knowledge-source:papra-server-tests
  - component:tags
id: REQ-papra-tags-color-of-tag-is-6-digits-hex
type: req
---
The color of a tag is a 6 digits hex color code.

## Context

Reason not stated. The server test suite checks this behaviour in apps/papra-server/src/modules/tags/tags.schemas.test.ts (tags schemas > tagColorSchema).

## Source

Source: Papra server behaviour notes - SRV-1844
