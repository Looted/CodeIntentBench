---
title: documents.create_document if_the_document_size_exceeds_the_organization_storage = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: if_the_document_size_exceeds_the_organization_storage
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-092078B53383787D
claim_text: If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db
text_ref: REQ-papra-documents-document-size-exceeds-organization-storage-limit-error
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1188'
  recorded_at: '2026-01-18T15:54:29.000Z'
id: FACT-papra-documents-create-document-if-the-document-size-exceeds-the-organization-storage
type: fact
---
If the document size exceeds the organization storage limit, an error is thrown and nothing is saved in the db.

Modeled from REQ-papra-documents-document-size-exceeds-organization-storage-limit-error so the claim can be checked for contradictions.
