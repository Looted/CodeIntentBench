---
title: share_link.public_access resumes_when_document_or_organization_restored = True
status: active
fact_kind: property_value
subject_key: share_link.public_access
property_key: resumes_when_document_or_organization_restored
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-89B5FC12CD6D0510
claim_text: access resumes automatically once the document or organization is restored
text_ref: REQ-papra-share-link-gone-semantics
tags:
  - lane:strict
  - knowledge-source:papra
origin:
  kind: agent
  ref: 'Papra server test suite (apps/papra-server/src/modules): document-share-links/document-share-links.usecases.test.ts#share-link-gone-semantics'
  recorded_at: '2026-11-15T22:58:13.507Z'
id: FACT-papra-share-link-public-access-resumes-when-document-or-organization-restored
type: fact
---
Access resumes automatically once the document or organization is restored.

Modeled from REQ-papra-share-link-gone-semantics so the claim can be checked for contradictions.
