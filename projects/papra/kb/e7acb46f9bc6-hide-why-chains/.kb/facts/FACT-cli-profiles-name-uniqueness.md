---
title: cli.profiles name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-22AF5F219590243D
claim_text: Profiles in the papra CLI are unique per config file regardless of letter case
text_ref: REQ-cli-profiles-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-135'
  recorded_at: '2025-09-25T09:48:44.000Z'
id: FACT-cli-profiles-name-uniqueness
type: fact
---
Profiles in the papra CLI are unique per config file regardless of letter case.

Modeled from REQ-cli-profiles-unique-ignoring-case so the claim can be checked for contradictions.
