---
title: document.deduplication duplicate_of_live_document = rejected_with_conflict
status: active
fact_kind: property_value
subject_key: document.deduplication
property_key: duplicate_of_live_document
operator: eq
value_type: string
value_string: rejected_with_conflict
claim_key: CLAIM-CC56B0783B91CEFF
claim_text: Uploading a duplicate of a live document is rejected with a conflict
text_ref: REQ-papra-duplicate-upload-restores-trashed-document
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#duplicate-upload-restores-trashed-document'
  recorded_at: '2026-11-16T10:29:55.746Z'
id: FACT-papra-document-deduplication-duplicate-of-live-document
type: fact
---
Uploading a duplicate of a live document is rejected with a conflict.

Modeled from REQ-papra-duplicate-upload-restores-trashed-document so the claim can be checked for contradictions.
