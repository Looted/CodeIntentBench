---
title: desktop.sync_folders limit_configurable = False
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-950BC8C0A4D47D22
claim_text: the limit is the same for everyone
text_ref: REQ-desktop-sync-folders-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-321'
  recorded_at: '2025-06-27T08:05:33.000Z'
id: FACT-desktop-sync-folders-limit-configurable
type: fact
---
The limit is the same for everyone.

Modeled from REQ-desktop-sync-folders-maximum-count so the claim can be checked for contradictions.
