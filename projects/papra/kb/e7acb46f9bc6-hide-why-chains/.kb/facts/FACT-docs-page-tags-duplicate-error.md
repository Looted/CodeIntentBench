---
title: docs.page_tags duplicate_error = page-tag-already-exists
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: duplicate_error
operator: eq
value_type: string
value_string: page-tag-already-exists
claim_key: CLAIM-2D472C64E00F21D4
claim_text: a duplicate is reported as page-tag-already-exists
text_ref: REQ-docs-page-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-108'
  recorded_at: '2025-09-03T15:14:08.000Z'
id: FACT-docs-page-tags-duplicate-error
type: fact
---
A duplicate is reported as page-tag-already-exists.

Modeled from REQ-docs-page-tags-unique-ignoring-case so the claim can be checked for contradictions.
