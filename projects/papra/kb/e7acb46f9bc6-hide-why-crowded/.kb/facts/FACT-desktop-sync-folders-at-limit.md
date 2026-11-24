---
title: desktop.sync_folders at_limit = refused, limit not named
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit not named
claim_key: CLAIM-86F0B6223D8611ED
claim_text: Creating a sync folder in the desktop sync client when the linked organization is at the limit is refused without disclosing the limit
text_ref: REQ-desktop-sync-folders-at-the-limit
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-327'
  recorded_at: '2026-05-03T13:51:20.000Z'
id: FACT-desktop-sync-folders-at-limit
type: fact
---
Creating a sync folder in the desktop sync client when the linked organization is at the limit is refused without disclosing the limit.

Modeled from REQ-desktop-sync-folders-at-the-limit so the claim can be checked for contradictions.
