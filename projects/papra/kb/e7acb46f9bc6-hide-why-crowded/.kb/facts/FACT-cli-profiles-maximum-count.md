---
title: cli.profiles maximum_count = 1000
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: maximum_count
operator: eq
value_type: int
value_int: 1000
claim_key: CLAIM-EF131BCC8F0192D6
claim_text: The number of profiles per config file in the papra CLI is limited to 1000
text_ref: REQ-cli-profiles-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-136'
  recorded_at: '2025-08-22T13:43:47.000Z'
id: FACT-cli-profiles-maximum-count
type: fact
---
The number of profiles per config file in the papra CLI is limited to 1000.

Modeled from REQ-cli-profiles-maximum-count so the claim can be checked for contradictions.
