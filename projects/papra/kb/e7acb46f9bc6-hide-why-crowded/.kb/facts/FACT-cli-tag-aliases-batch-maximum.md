---
title: cli.tag_aliases batch_maximum = 10
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: batch_maximum
operator: eq
value_type: int
value_int: 10
claim_key: CLAIM-32FB2CE3A165A658
claim_text: At most 10 tag aliases can be added or removed in one request in the papra CLI
text_ref: REQ-cli-tag-aliases-batch-size
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-130'
  recorded_at: '2025-03-18T08:20:18.000Z'
id: FACT-cli-tag-aliases-batch-maximum
type: fact
---
At most 10 tag aliases can be added or removed in one request in the papra CLI.

Modeled from REQ-cli-tag-aliases-batch-size so the claim can be checked for contradictions.
