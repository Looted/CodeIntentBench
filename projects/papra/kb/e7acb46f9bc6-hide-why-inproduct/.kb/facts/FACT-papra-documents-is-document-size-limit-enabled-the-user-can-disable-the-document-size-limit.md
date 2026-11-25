---
title: documents.is_document_size_limit_enabled the_user_can_disable_the_document_size_limit = True
status: active
fact_kind: property_value
subject_key: documents.is_document_size_limit_enabled
property_key: the_user_can_disable_the_document_size_limit
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-F44B68350DE99F5C
claim_text: The user can disable the document size limit by setting the maxUploadSize to 0 or less
text_ref: REQ-papra-documents-user-can-disable-document-size-limit-by
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1122'
  recorded_at: '2026-04-26T15:30:03.000Z'
id: FACT-papra-documents-is-document-size-limit-enabled-the-user-can-disable-the-document-size-limit
type: fact
---
The user can disable the document size limit by setting the maxUploadSize to 0 or less.

Modeled from REQ-papra-documents-user-can-disable-document-size-limit-by so the claim can be checked for contradictions.
