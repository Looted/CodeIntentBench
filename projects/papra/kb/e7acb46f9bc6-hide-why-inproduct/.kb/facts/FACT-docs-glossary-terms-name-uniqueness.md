---
title: docs.glossary_terms name_uniqueness = exact
status: active
fact_kind: property_value
subject_key: docs.glossary_terms
property_key: name_uniqueness
operator: eq
value_type: string
value_string: exact
claim_key: CLAIM-737D168E35E41DA9
claim_text: Glossary terms on the documentation site are compared exactly as typed
text_ref: REQ-docs-glossary-terms-case-sensitive-names
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-103'
  recorded_at: '2025-06-25T17:01:27.000Z'
id: FACT-docs-glossary-terms-name-uniqueness
type: fact
---
Glossary terms on the documentation site are compared exactly as typed.

Modeled from REQ-docs-glossary-terms-case-sensitive-names so the claim can be checked for contradictions.
