---
title: documents.batch_trash_body_schema rejects_a_body_with_both_documentids_and_query = True
status: active
fact_kind: property_value
subject_key: documents.batch_trash_body_schema
property_key: rejects_a_body_with_both_documentids_and_query
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-2F83BD8F5358A8F4
claim_text: Rejects a body with both documentIds and query (strict union)
text_ref: REQ-papra-documents-rejects-body-with-both-documentids-and-query
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1044'
  recorded_at: '2025-08-24T11:19:47.000Z'
id: FACT-papra-documents-batch-trash-body-schema-rejects-a-body-with-both-documentids-and-query
type: fact
---
Rejects a body with both documentIds and query (strict union).

Modeled from REQ-papra-documents-rejects-body-with-both-documentids-and-query so the claim can be checked for contradictions.
