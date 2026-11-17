---
title: forum.forum_groups restore_window_days = 7
status: active
fact_kind: property_value
subject_key: forum.forum_groups
property_key: restore_window_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-82D2E3C67EB2B001
claim_text: A deleted forum group on the community forum can be restored for 7 days
text_ref: REQ-forum-forum-groups-deletion-grace
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-309'
  recorded_at: '2025-02-03T08:55:49.000Z'
id: FACT-forum-forum-groups-restore-window-days
type: fact
---
A deleted forum group on the community forum can be restored for 7 days.

Modeled from REQ-forum-forum-groups-deletion-grace so the claim can be checked for contradictions.
