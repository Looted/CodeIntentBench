---
title: cli.profiles delete_in_use = refused
status: active
fact_kind: property_value
subject_key: cli.profiles
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-F6617CA1135AFEA1
claim_text: Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it
text_ref: REQ-cli-profiles-delete-in-use
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-145'
  recorded_at: '2025-03-28T11:36:16.000Z'
id: FACT-cli-profiles-delete-in-use
type: fact
---
Deleting a profile in the papra CLI that is still in use is refused until nothing refers to it.

Modeled from REQ-cli-profiles-delete-in-use so the claim can be checked for contradictions.
