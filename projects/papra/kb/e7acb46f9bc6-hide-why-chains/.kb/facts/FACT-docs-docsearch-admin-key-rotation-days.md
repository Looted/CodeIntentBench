---
title: docs.docsearch_admin_key rotation_days = 90
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: rotation_days
operator: eq
value_type: int
value_int: 90
claim_key: CLAIM-EADEB3EB95A94F01
claim_text: DOCSEARCH_ADMIN_KEY is rotated every 90 days
text_ref: REQ-docs-docsearch-admin-key-rotation
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-312'
  recorded_at: '2026-07-04T15:14:27.000Z'
id: FACT-docs-docsearch-admin-key-rotation-days
type: fact
---
DOCSEARCH_ADMIN_KEY is rotated every 90 days.

Modeled from REQ-docs-docsearch-admin-key-rotation so the claim can be checked for contradictions.
