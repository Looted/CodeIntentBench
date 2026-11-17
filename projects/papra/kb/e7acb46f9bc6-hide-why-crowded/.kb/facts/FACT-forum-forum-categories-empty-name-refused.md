---
title: forum.forum_categories empty_name_refused = True
status: active
fact_kind: property_value
subject_key: forum.forum_categories
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-forum-forum-categories-names-trimmed
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-140'
  recorded_at: '2025-02-06T17:38:20.000Z'
id: FACT-forum-forum-categories-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-forum-forum-categories-names-trimmed so the claim can be checked for contradictions.
