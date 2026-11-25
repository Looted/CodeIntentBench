---
title: cli.saved_organizations name_max_length = 32
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-8B9DE82238ABF26D
claim_text: Saved organization names in the papra CLI are between 3 and 32 characters long
text_ref: REQ-cli-saved-organizations-name-length
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-252'
  recorded_at: '2025-09-10T11:17:14.000Z'
id: FACT-cli-saved-organizations-name-max-length
type: fact
---
Saved organization names in the papra CLI are between 3 and 32 characters long.

Modeled from REQ-cli-saved-organizations-name-length so the claim can be checked for contradictions.
