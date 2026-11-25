---
title: cli.saved_organizations ownership_transfer = existing member
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: ownership_transfer
operator: eq
value_type: string
value_string: existing member
claim_key: CLAIM-6B686C696C91F28B
claim_text: Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it
text_ref: REQ-cli-saved-organizations-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-265'
  recorded_at: '2026-04-13T15:57:59.000Z'
id: FACT-cli-saved-organizations-ownership-transfer
type: fact
---
Ownership of a saved organization in the papra CLI can be transferred only to someone who is already a member of it.

Modeled from REQ-cli-saved-organizations-ownership-transfer so the claim can be checked for contradictions.
