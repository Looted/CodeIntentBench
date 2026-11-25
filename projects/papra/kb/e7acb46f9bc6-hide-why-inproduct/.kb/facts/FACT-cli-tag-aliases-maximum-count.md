---
title: cli.tag_aliases maximum_count = 50
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: maximum_count
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-35D2D1A7C07E0983
claim_text: At most 50 tag aliases can be created per mapping file in the papra CLI
text_ref: REQ-cli-tag-aliases-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-108'
  recorded_at: '2025-09-13T10:14:39.000Z'
id: FACT-cli-tag-aliases-maximum-count
type: fact
---
At most 50 tag aliases can be created per mapping file in the papra CLI.

Modeled from REQ-cli-tag-aliases-maximum-count so the claim can be checked for contradictions.
