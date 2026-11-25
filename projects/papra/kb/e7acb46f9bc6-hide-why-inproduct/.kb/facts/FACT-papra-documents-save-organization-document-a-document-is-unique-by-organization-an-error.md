---
title: documents.save_organization_document a_document_is_unique_by_organization_an_error = True
status: active
fact_kind: property_value
subject_key: documents.save_organization_document
property_key: a_document_is_unique_by_organization_an_error
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-FD1DAAFE6432CCA9
claim_text: A document is unique by organization, an error is raised if a document with the same hash already exists
text_ref: REQ-papra-documents-document-is-unique-by-organization-error-is
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1126'
  recorded_at: '2026-09-06T10:18:15.000Z'
id: FACT-papra-documents-save-organization-document-a-document-is-unique-by-organization-an-error
type: fact
---
A document is unique by organization, an error is raised if a document with the same hash already exists.

Modeled from REQ-papra-documents-document-is-unique-by-organization-error-is so the claim can be checked for contradictions.
