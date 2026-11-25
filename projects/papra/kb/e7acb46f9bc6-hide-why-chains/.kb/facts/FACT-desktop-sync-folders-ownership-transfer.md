---
title: desktop.sync_folders ownership_transfer = existing member
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: ownership_transfer
operator: eq
value_type: string
value_string: existing member
claim_key: CLAIM-74E7A1C02E639D01
claim_text: Ownership of a sync folder in the desktop sync client can be transferred only to someone who is already a member of it
text_ref: REQ-desktop-sync-folders-ownership-transfer
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-334'
  recorded_at: '2025-09-09T08:51:52.000Z'
id: FACT-desktop-sync-folders-ownership-transfer
type: fact
---
Ownership of a sync folder in the desktop sync client can be transferred only to someone who is already a member of it.

Modeled from REQ-desktop-sync-folders-ownership-transfer so the claim can be checked for contradictions.
