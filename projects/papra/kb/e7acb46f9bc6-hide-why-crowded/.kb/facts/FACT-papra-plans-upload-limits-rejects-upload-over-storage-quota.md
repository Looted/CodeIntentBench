---
title: plans.upload_limits rejects_upload_over_storage_quota = True
status: active
fact_kind: property_value
subject_key: plans.upload_limits
property_key: rejects_upload_over_storage_quota
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6367C2F4268CC113
claim_text: a file that would push total stored bytes past the plan's storage quota is rejected
text_ref: REQ-papra-plan-storage-and-file-size-limits
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#plan-storage-and-file-size-limits'
  recorded_at: '2026-11-16T13:16:09.084Z'
id: FACT-papra-plans-upload-limits-rejects-upload-over-storage-quota
type: fact
---
A file that would push total stored bytes past the plan's storage quota is rejected.

Modeled from REQ-papra-plan-storage-and-file-size-limits so the claim can be checked for contradictions.
