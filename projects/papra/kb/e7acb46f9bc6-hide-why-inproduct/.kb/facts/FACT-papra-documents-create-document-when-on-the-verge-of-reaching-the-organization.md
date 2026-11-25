---
title: documents.create_document when_on_the_verge_of_reaching_the_organization = True
status: active
fact_kind: property_value
subject_key: documents.create_document
property_key: when_on_the_verge_of_reaching_the_organization
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-777C563F4A8688C5
claim_text: When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same time, the quota is not exceeded and only the first to be inserted is saved
text_ref: REQ-papra-documents-on-verge-of-reaching-organization-storage-limit
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1221'
  recorded_at: '2025-05-08T15:06:59.000Z'
id: FACT-papra-documents-create-document-when-on-the-verge-of-reaching-the-organization
type: fact
---
When on the verge of reaching the organization storage limit, if multiple documents, with the sum of the size exceeding the limit, are uploaded at the same time, the quota is not exceeded and only the first to be inserted is saved.

Modeled from REQ-papra-documents-on-verge-of-reaching-organization-storage-limit so the claim can be checked for contradictions.
