---
title: docs.page_tags name_trimmed = True
status: active
fact_kind: property_value
subject_key: docs.page_tags
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-83A7E5F4B4FC49A3
claim_text: Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-docs-page-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-113'
  recorded_at: '2025-03-05T12:56:32.000Z'
id: FACT-docs-page-tags-name-trimmed
type: fact
---
Page tag names on the documentation site are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-docs-page-tags-names-trimmed so the claim can be checked for contradictions.
