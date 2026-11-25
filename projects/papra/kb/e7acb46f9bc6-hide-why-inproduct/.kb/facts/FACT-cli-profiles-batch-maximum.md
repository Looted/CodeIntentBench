---
title: cli.profiles batch_maximum = 5
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: batch_maximum
operator: eq
value_type: int
value_int: 5
claim_key: CLAIM-F75668BC29CD0974
claim_text: At most 5 profiles can be added or removed in one request in the papra CLI
text_ref: REQ-cli-profiles-batch-size
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-150'
  recorded_at: '2025-02-24T13:28:20.000Z'
id: FACT-cli-profiles-batch-maximum
type: fact
---
At most 5 profiles can be added or removed in one request in the papra CLI.

Modeled from REQ-cli-profiles-batch-size so the claim can be checked for contradictions.
