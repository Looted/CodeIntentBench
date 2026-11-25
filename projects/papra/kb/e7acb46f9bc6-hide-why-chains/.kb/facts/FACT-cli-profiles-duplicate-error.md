---
title: cli.profiles duplicate_error = profile-already-exists
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: duplicate_error
operator: eq
value_type: string
value_string: profile-already-exists
claim_key: CLAIM-1375A3C1B3F7D387
claim_text: a duplicate is reported as profile-already-exists
text_ref: REQ-cli-profiles-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-135'
  recorded_at: '2025-09-25T09:48:44.000Z'
id: FACT-cli-profiles-duplicate-error
type: fact
---
A duplicate is reported as profile-already-exists.

Modeled from REQ-cli-profiles-unique-ignoring-case so the claim can be checked for contradictions.
