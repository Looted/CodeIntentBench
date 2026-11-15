---
title: plans.upload_limits persists_anything_on_rejection = False
status: active
fact_kind: property_value
subject_key: plans.upload_limits
property_key: persists_anything_on_rejection
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-084E28B333EE274B
claim_text: In both cases nothing is persisted (no database row, no stored file)
text_ref: REQ-papra-plan-storage-and-file-size-limits
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#plan-storage-and-file-size-limits'
  recorded_at: '2026-11-15T22:58:07.230Z'
id: FACT-papra-plans-upload-limits-persists-anything-on-rejection
type: fact
---
In both cases nothing is persisted (no database row, no stored file).

Modeled from REQ-papra-plan-storage-and-file-size-limits so the claim can be checked for contradictions.
