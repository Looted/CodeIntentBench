---
title: cli.saved_organizations restore_window_days = 60
status: active
fact_kind: property_value
subject_key: cli.saved_organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-09F3B60F4267798B
claim_text: A deleted saved organization in the papra CLI can be restored for 60 days
text_ref: REQ-cli-saved-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-257'
  recorded_at: '2026-02-25T12:11:50.000Z'
id: FACT-cli-saved-organizations-restore-window-days
type: fact
---
A deleted saved organization in the papra CLI can be restored for 60 days.

Modeled from REQ-cli-saved-organizations-deletion-grace so the claim can be checked for contradictions.
