---
title: desktop.sync_folders purged_after_window = True
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: purged_after_window
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-7E91447BA9FA2D3B
claim_text: after that it is removed for good
text_ref: REQ-desktop-sync-folders-deletion-grace
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-331'
  recorded_at: '2025-06-23T15:27:06.000Z'
id: FACT-desktop-sync-folders-purged-after-window
type: fact
---
After that it is removed for good.

Modeled from REQ-desktop-sync-folders-deletion-grace so the claim can be checked for contradictions.
