---
title: desktop.sync_folders counted_toward_limit = all accessible
status: active
fact_kind: property_value
subject_key: desktop.sync_folders
property_key: counted_toward_limit
operator: eq
value_type: string
value_string: all accessible
claim_key: CLAIM-161F8DC4894DDC4E
claim_text: Every sync folder the linked organization can access counts toward the limit in the desktop sync client
text_ref: REQ-desktop-sync-folders-what-counts
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-322'
  recorded_at: '2026-05-13T11:53:28.000Z'
id: FACT-desktop-sync-folders-counted-toward-limit
type: fact
---
Every sync folder the linked organization can access counts toward the limit in the desktop sync client.

Modeled from REQ-desktop-sync-folders-what-counts so the claim can be checked for contradictions.
