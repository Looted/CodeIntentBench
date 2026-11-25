---
title: docs.docsearch_admin_key development_default = always required
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-5CCB4A7A61DCD734
claim_text: The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included
text_ref: REQ-docs-docsearch-admin-key-development-default
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-321'
  recorded_at: '2026-04-21T10:32:18.000Z'
id: FACT-docs-docsearch-admin-key-development-default
type: fact
---
The documentation search proxy requires DOCSEARCH_ADMIN_KEY in every environment, development included.

Modeled from REQ-docs-docsearch-admin-key-development-default so the claim can be checked for contradictions.
