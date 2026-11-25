---
title: website.blog_tags delete_in_use = detached
status: active
fact_kind: property_value
subject_key: website.blog_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-EC7C44D37339F9E5
claim_text: Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use
text_ref: REQ-website-blog-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:website-decisions
origin:
  kind: agent
  ref: 'Marketing website decision log (apps/website): WEB-123'
  recorded_at: '2026-05-16T16:48:48.000Z'
id: FACT-website-blog-tags-delete-in-use
type: fact
---
Deleting a blog tag on the marketing website removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-website-blog-tags-delete-in-use so the claim can be checked for contradictions.
