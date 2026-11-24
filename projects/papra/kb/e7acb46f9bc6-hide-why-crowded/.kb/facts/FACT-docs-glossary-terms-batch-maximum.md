---
title: docs.glossary_terms batch_maximum = 25
status: active
fact_kind: property_value
subject_key: docs.glossary_terms
property_key: batch_maximum
operator: eq
value_type: int
value_int: 25
claim_key: CLAIM-BBA4195AE3765A29
claim_text: At most 25 glossary terms can be added or removed in one request on the documentation site
text_ref: REQ-docs-glossary-terms-batch-size
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-159'
  recorded_at: '2025-06-05T13:23:23.000Z'
id: FACT-docs-glossary-terms-batch-maximum
type: fact
---
At most 25 glossary terms can be added or removed in one request on the documentation site.

Modeled from REQ-docs-glossary-terms-batch-size so the claim can be checked for contradictions.
