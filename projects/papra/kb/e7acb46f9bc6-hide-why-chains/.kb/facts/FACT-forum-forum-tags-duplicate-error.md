---
title: forum.forum_tags duplicate_error = forum-tag-already-exists
status: active
fact_kind: property_value
subject_key: forum.forum_tags
property_key: duplicate_error
operator: eq
value_type: string
value_string: forum-tag-already-exists
claim_key: CLAIM-DC86354351D563C6
claim_text: a duplicate is reported as forum-tag-already-exists
text_ref: REQ-forum-forum-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-105'
  recorded_at: '2025-12-16T14:33:22.000Z'
id: FACT-forum-forum-tags-duplicate-error
type: fact
---
A duplicate is reported as forum-tag-already-exists.

Modeled from REQ-forum-forum-tags-unique-ignoring-case so the claim can be checked for contradictions.
