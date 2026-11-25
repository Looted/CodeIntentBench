---
title: documents.documents_e2e uploading_a_document_to_an_organization_the_user = True
status: active
fact_kind: property_value
subject_key: documents.documents_e2e
property_key: uploading_a_document_to_an_organization_the_user
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AB6FDC8DA3D409A4
claim_text: Uploading a document to an organization the user is not a member of returns a 403
text_ref: REQ-papra-documents-uploading-document-to-organization-user-is-not
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1260'
  recorded_at: '2025-03-19T09:06:11.000Z'
id: FACT-papra-documents-documents-e2e-uploading-a-document-to-an-organization-the-user
type: fact
---
Uploading a document to an organization the user is not a member of returns a 403.

Modeled from REQ-papra-documents-uploading-document-to-organization-user-is-not so the claim can be checked for contradictions.
