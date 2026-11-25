---
title: cli.tag_aliases name_max_length = 120
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: name_max_length
operator: eq
value_type: int
value_int: 120
claim_key: CLAIM-53B3B33FDBA82FB2
claim_text: Tag alias names in the papra CLI are limited to 120 characters
text_ref: REQ-cli-tag-aliases-name-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-116'
  recorded_at: '2025-04-23T10:30:17.000Z'
id: FACT-cli-tag-aliases-name-max-length
type: fact
---
Tag alias names in the papra CLI are limited to 120 characters.

Modeled from REQ-cli-tag-aliases-name-length so the claim can be checked for contradictions.
