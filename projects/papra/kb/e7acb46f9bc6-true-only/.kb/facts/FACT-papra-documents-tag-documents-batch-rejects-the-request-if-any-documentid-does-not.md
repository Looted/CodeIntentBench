---
title: documents.tag_documents_batch rejects_the_request_if_any_documentid_does_not = True
status: active
fact_kind: property_value
subject_key: documents.tag_documents_batch
property_key: rejects_the_request_if_any_documentid_does_not
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-53F02DD2DA1BA6A1
claim_text: Rejects the request if any documentId does not belong to the organization
text_ref: REQ-papra-documents-rejects-request-if-any-documentid-does-not
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1081'
  recorded_at: '2026-08-07T11:29:10.000Z'
id: FACT-papra-documents-tag-documents-batch-rejects-the-request-if-any-documentid-does-not
type: fact
---
Rejects the request if any documentId does not belong to the organization.

Modeled from REQ-papra-documents-rejects-request-if-any-documentid-does-not so the claim can be checked for contradictions.
