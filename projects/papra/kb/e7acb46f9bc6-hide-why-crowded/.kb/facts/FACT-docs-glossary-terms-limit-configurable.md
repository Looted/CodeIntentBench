---
title: docs.glossary_terms limit_configurable = True
status: active
fact_kind: property_value
subject_key: docs.glossary_terms
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-33B228D1A7AD97C8
claim_text: the limit is configurable and 300 is the default
text_ref: REQ-docs-glossary-terms-maximum-count
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-124'
  recorded_at: '2025-03-27T14:53:47.000Z'
id: FACT-docs-glossary-terms-limit-configurable
type: fact
---
The limit is configurable and 300 is the default.

Modeled from REQ-docs-glossary-terms-maximum-count so the claim can be checked for contradictions.
