---
title: plans.upload_limits rejects_file_over_max_file_size = True
status: active
fact_kind: property_value
subject_key: plans.upload_limits
property_key: rejects_file_over_max_file_size
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DDF33D9F644751B4
claim_text: 'Uploads are bounded by the organization''s plan: a file larger than the plan''s maximum file size is rejected'
text_ref: REQ-papra-plan-storage-and-file-size-limits
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#plan-storage-and-file-size-limits'
  recorded_at: '2026-11-16T13:16:08.430Z'
id: FACT-papra-plans-upload-limits-rejects-file-over-max-file-size
type: fact
---
Uploads are bounded by the organization's plan: a file larger than the plan's maximum file size is rejected.

Modeled from REQ-papra-plan-storage-and-file-size-limits so the claim can be checked for contradictions.
