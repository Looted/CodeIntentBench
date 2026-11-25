---
title: cli.saved_organizations maximum_count = 25
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: maximum_count
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-AD0F2372BCA98336
claim_text: A profile can own at most 25 saved organizations in the papra CLI
text_ref: REQ-cli-saved-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-234'
  recorded_at: '2025-07-22T15:19:20.000Z'
id: FACT-cli-saved-organizations-maximum-count
type: fact
---
A profile can own at most 25 saved organizations in the papra CLI.

Modeled from REQ-cli-saved-organizations-maximum-count so the claim can be checked for contradictions.
