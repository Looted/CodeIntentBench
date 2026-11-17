---
title: forum.forum_tags delete_in_use = refused
status: active
fact_kind: property_value
subject_key: forum.forum_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-D7B58934A0A9FBC1
claim_text: Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it
text_ref: REQ-forum-forum-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-128'
  recorded_at: '2025-12-15T16:05:57.000Z'
id: FACT-forum-forum-tags-delete-in-use
type: fact
---
Deleting a forum tag on the community forum that is still in use is refused until nothing refers to it.

Modeled from REQ-forum-forum-tags-delete-in-use so the claim can be checked for contradictions.
