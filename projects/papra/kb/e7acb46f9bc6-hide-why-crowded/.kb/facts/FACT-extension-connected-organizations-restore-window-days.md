---
title: extension.connected_organizations restore_window_days = 60
status: active
fact_kind: property_value
subject_key: extension.connected_organizations
property_key: restore_window_days
operator: eq
value_type: int
value_int: 60
claim_key: CLAIM-62E4DF135C9C64CE
claim_text: A deleted connected organization in the browser extension can be restored for 60 days
text_ref: REQ-extension-connected-organizations-deletion-grace
tags:
  - lane:strict
  - knowledge-source:extension-decisions
origin:
  kind: agent
  ref: 'Browser extension decision log: EXT-312'
  recorded_at: '2026-03-22T14:18:49.000Z'
id: FACT-extension-connected-organizations-restore-window-days
type: fact
---
A deleted connected organization in the browser extension can be restored for 60 days.

Modeled from REQ-extension-connected-organizations-deletion-grace so the claim can be checked for contradictions.
