---
title: forum.forum_tags empty_name_refused = True
status: active
fact_kind: property_value
subject_key: forum.forum_tags
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-forum-forum-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-123'
  recorded_at: '2025-10-17T14:51:42.000Z'
id: FACT-forum-forum-tags-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-forum-forum-tags-names-trimmed so the claim can be checked for contradictions.
