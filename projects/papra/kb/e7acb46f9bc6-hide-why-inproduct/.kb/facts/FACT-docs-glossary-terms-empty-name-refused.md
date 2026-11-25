---
title: docs.glossary_terms empty_name_refused = True
status: active
fact_kind: property_value
subject_key: docs.glossary_terms
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-docs-glossary-terms-names-trimmed
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-116'
  recorded_at: '2025-12-02T08:26:23.000Z'
id: FACT-docs-glossary-terms-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-docs-glossary-terms-names-trimmed so the claim can be checked for contradictions.
