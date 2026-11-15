---
title: document.deduplication identical_content_stored_once_per_organization = True
status: active
fact_kind: property_value
subject_key: document.deduplication
property_key: identical_content_stored_once_per_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D2A66A4236D7AF28
claim_text: Within an organization a file with identical content is stored only once
text_ref: REQ-papra-duplicate-upload-restores-trashed-document
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): documents/documents.usecases.test.ts#duplicate-upload-restores-trashed-document'
  recorded_at: '2026-11-15T22:57:37.631Z'
id: FACT-papra-document-deduplication-identical-content-stored-once-per-organization
type: fact
---
Within an organization a file with identical content is stored only once.

Modeled from REQ-papra-duplicate-upload-restores-trashed-document so the claim can be checked for contradictions.
