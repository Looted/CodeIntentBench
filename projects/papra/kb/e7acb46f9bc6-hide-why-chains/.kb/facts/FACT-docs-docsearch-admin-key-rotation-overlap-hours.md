---
title: docs.docsearch_admin_key rotation_overlap_hours = 1
status: active
fact_kind: property_value
subject_key: docs.docsearch_admin_key
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 1
claim_key: CLAIM-BD83FC4FB2DF2432
claim_text: the previous value stays valid for 1 hours after a rotation
text_ref: REQ-docs-docsearch-admin-key-rotation
tags:
  - lane:strict
  - knowledge-source:docs-decisions
origin:
  kind: agent
  ref: 'Documentation site decision log (apps/docs): DOC-312'
  recorded_at: '2026-07-04T15:14:27.000Z'
id: FACT-docs-docsearch-admin-key-rotation-overlap-hours
type: fact
---
The previous value stays valid for 1 hours after a rotation.

Modeled from REQ-docs-docsearch-admin-key-rotation so the claim can be checked for contradictions.
