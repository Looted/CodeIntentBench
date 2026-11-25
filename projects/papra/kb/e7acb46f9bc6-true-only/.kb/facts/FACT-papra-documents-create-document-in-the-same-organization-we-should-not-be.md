---
title: documents.create_document in_the_same_organization_we_should_not_be = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: in_the_same_organization_we_should_not_be
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-5E5DBA87C6C4A59C
claim_text: In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists
text_ref: REQ-papra-documents-in-same-organization-we-should-not-be
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1191'
  recorded_at: '2026-03-02T13:47:32.000Z'
id: FACT-papra-documents-create-document-in-the-same-organization-we-should-not-be
type: fact
---
In the same organization, we should not be able to have two documents with the same content, an error is raised if the document already exists.

Modeled from REQ-papra-documents-in-same-organization-we-should-not-be so the claim can be checked for contradictions.
