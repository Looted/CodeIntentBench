---
title: cli.saved_organizations purged_after_window = True
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-cli-saved-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-257'
  recorded_at: '2026-02-25T12:11:50.000Z'
id: FACT-cli-saved-organizations-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-cli-saved-organizations-deletion-grace so the claim can be checked for contradictions.
