---
title: forum.forum_categories name_trimmed = True
status: active
fact_kind: property_value
subject_key: forum.forum_categories
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-875FCA846AC31DF2
claim_text: Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-forum-forum-categories-names-trimmed
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-140'
  recorded_at: '2025-02-06T17:38:20.000Z'
id: FACT-forum-forum-categories-name-trimmed
type: fact
---
Forum category names on the community forum are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-forum-forum-categories-names-trimmed so the claim can be checked for contradictions.
