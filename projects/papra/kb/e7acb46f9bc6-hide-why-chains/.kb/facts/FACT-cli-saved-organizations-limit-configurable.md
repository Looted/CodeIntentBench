---
title: cli.saved_organizations limit_configurable = False
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-cli-saved-organizations-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-234'
  recorded_at: '2025-07-22T15:19:20.000Z'
id: FACT-cli-saved-organizations-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-cli-saved-organizations-maximum-count so the claim can be checked for contradictions.
