---
title: cli.profiles limit_configurable = True
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D14F54198D4B07D0
claim_text: the limit is configurable and 1000 is the default
text_ref: REQ-cli-profiles-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-136'
  recorded_at: '2025-08-22T13:43:47.000Z'
id: FACT-cli-profiles-limit-configurable
type: fact
---
The limit is configurable and 1000 is the default.

Modeled from REQ-cli-profiles-maximum-count so the claim can be checked for contradictions.
