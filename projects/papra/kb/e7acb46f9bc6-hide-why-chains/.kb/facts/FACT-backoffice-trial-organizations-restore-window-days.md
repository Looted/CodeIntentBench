---
title: backoffice.trial_organizations restore_window_days = 30
status: active
fact_kind: property_value
subject_key: backoffice.trial_organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-9941DC11EA871AAA
claim_text: A deleted trial organization in the Papra Cloud back office can be restored for 30 days
text_ref: REQ-backoffice-trial-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-510'
  recorded_at: '2026-01-07T16:25:51.000Z'
id: FACT-backoffice-trial-organizations-restore-window-days
type: fact
---
A deleted trial organization in the Papra Cloud back office can be restored for 30 days.

Modeled from REQ-backoffice-trial-organizations-deletion-grace so the claim can be checked for contradictions.
