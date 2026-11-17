---
title: desktop.sync_folders name_uniqueness = unique per owner
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique per owner
claim_key: CLAIM-0C2A21374E7C781A
claim_text: Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case
text_ref: REQ-desktop-sync-folders-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-328'
  recorded_at: '2025-12-07T11:33:39.000Z'
id: FACT-desktop-sync-folders-name-uniqueness
type: fact
---
Sync folder names in the desktop sync client are unique per linked organization, regardless of letter case.

Modeled from REQ-desktop-sync-folders-name-uniqueness so the claim can be checked for contradictions.
