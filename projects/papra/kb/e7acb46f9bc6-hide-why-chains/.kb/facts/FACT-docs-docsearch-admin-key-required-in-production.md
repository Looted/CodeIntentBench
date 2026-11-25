---
title: docs.docsearch_admin_key required_in_production = True
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F2D28211FDCE0524
claim_text: The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY
text_ref: REQ-docs-docsearch-admin-key-required-in-production
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-299'
  recorded_at: '2026-06-27T14:25:11.000Z'
id: FACT-docs-docsearch-admin-key-required-in-production
type: fact
---
The documentation search proxy refuses to start in production without DOCSEARCH_ADMIN_KEY.

Modeled from REQ-docs-docsearch-admin-key-required-in-production so the claim can be checked for contradictions.
