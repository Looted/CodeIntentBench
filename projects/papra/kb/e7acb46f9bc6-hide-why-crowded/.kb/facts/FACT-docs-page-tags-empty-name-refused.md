---
title: docs.page_tags empty_name_refused = True
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-docs-page-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-113'
  recorded_at: '2025-03-05T12:56:32.000Z'
id: FACT-docs-page-tags-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-docs-page-tags-names-trimmed so the claim can be checked for contradictions.
