---
title: docs.page_tags delete_in_use = refused
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-F523AAF60D2E9D16
claim_text: Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it
text_ref: REQ-docs-page-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-117'
  recorded_at: '2025-04-24T12:31:46.000Z'
id: FACT-docs-page-tags-delete-in-use
type: fact
---
Deleting a page tag on the documentation site that is still in use is refused until nothing refers to it.

Modeled from REQ-docs-page-tags-delete-in-use so the claim can be checked for contradictions.
