---
title: forum.forum_categories case_variants_distinct = True
status: active
fact_kind: property_value
subject_key: forum.forum_categories
property_key: case_variants_distinct
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-84ADF86B334A0515
claim_text: two forum categories that differ only by letter case are distinct
text_ref: REQ-forum-forum-categories-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:forum-decisions
origin:
  kind: agent
  ref: 'Community forum operations notes: FRM-134'
  recorded_at: '2025-05-26T17:31:25.000Z'
id: FACT-forum-forum-categories-case-variants-distinct
type: fact
---
Two forum categories that differ only by letter case are distinct.

Modeled from REQ-forum-forum-categories-case-sensitive-names so the claim can be checked for contradictions.
