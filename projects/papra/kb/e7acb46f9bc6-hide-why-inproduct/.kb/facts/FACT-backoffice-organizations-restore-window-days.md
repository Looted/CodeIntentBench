---
title: backoffice.organizations restore_window_days = 30
status: active
fact_kind: property_value
subject_key: backoffice.organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-29AB73969A7CF6E4
claim_text: A deleted organization in the Papra Cloud back office can be restored for 30 days
text_ref: REQ-backoffice-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-245'
  recorded_at: '2026-04-10T15:37:21.000Z'
id: FACT-backoffice-organizations-restore-window-days
type: fact
---
A deleted organization in the Papra Cloud back office can be restored for 30 days.

Modeled from REQ-backoffice-organizations-deletion-grace so the claim can be checked for contradictions.
