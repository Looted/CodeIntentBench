---
title: docs.glossary_terms maximum_count = 300
status: active
fact_kind: property_value
subject_key: docs.glossary_terms
property_key: maximum_count
operator: eq
value_type: int
value_int: 300
claim_key: CLAIM-2683DBBE6E902E19
claim_text: At most 300 glossary terms can be created per locale on the documentation site
text_ref: REQ-docs-glossary-terms-maximum-count
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-124'
  recorded_at: '2025-03-27T14:53:47.000Z'
id: FACT-docs-glossary-terms-maximum-count
type: fact
---
At most 300 glossary terms can be created per locale on the documentation site.

Modeled from REQ-docs-glossary-terms-maximum-count so the claim can be checked for contradictions.
