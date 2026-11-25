---
title: cli.profiles name_max_length = 64
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: name_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-E33D2C99A2C01E22
claim_text: Profile names in the papra CLI are limited to 64 characters
text_ref: REQ-cli-profiles-name-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-138'
  recorded_at: '2025-05-10T15:35:12.000Z'
id: FACT-cli-profiles-name-max-length
type: fact
---
Profile names in the papra CLI are limited to 64 characters.

Modeled from REQ-cli-profiles-name-length so the claim can be checked for contradictions.
