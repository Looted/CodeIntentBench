---
title: desktop.sync_folders maximum_count = 20
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: maximum_count
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-0974F0E743EAFCA3
claim_text: The number of sync folders per linked organization in the desktop sync client is limited to 20
text_ref: REQ-desktop-sync-folders-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-321'
  recorded_at: '2025-06-27T08:05:33.000Z'
id: FACT-desktop-sync-folders-maximum-count
type: fact
---
The number of sync folders per linked organization in the desktop sync client is limited to 20.

Modeled from REQ-desktop-sync-folders-maximum-count so the claim can be checked for contradictions.
