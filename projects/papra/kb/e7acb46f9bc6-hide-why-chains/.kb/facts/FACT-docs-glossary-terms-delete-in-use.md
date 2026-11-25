---
title: docs.glossary_terms delete_in_use = detached
status: active
fact_kind: property_value
subject_key: docs.glossary_terms
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-E91624D04B7C584C
claim_text: Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use
text_ref: REQ-docs-glossary-terms-delete-in-use
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-151'
  recorded_at: '2026-01-11T12:34:10.000Z'
id: FACT-docs-glossary-terms-delete-in-use
type: fact
---
Deleting a glossary term on the documentation site removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-docs-glossary-terms-delete-in-use so the claim can be checked for contradictions.
