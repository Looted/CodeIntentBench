---
title: forum.forum_categories delete_in_use = refused
status: active
fact_kind: property_value
subject_key: forum.forum_categories
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-D08B11517DF4EC2A
claim_text: Deleting a forum category on the community forum that is still in use is refused until nothing refers to it
text_ref: REQ-forum-forum-categories-delete-in-use
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-153'
  recorded_at: '2025-11-19T15:08:25.000Z'
id: FACT-forum-forum-categories-delete-in-use
type: fact
---
Deleting a forum category on the community forum that is still in use is refused until nothing refers to it.

Modeled from REQ-forum-forum-categories-delete-in-use so the claim can be checked for contradictions.
