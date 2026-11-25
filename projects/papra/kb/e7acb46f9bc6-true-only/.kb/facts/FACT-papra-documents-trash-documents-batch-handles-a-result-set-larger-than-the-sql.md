---
title: documents.trash_documents_batch handles_a_result_set_larger_than_the_sql = True
status: active
fact_kind: property_value
subject_key: documents.trash_documents_batch
property_key: handles_a_result_set_larger_than_the_sql
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-ECD608E027D204A0
claim_text: Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete
text_ref: REQ-papra-documents-handles-result-set-larger-than-sql-host
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1069'
  recorded_at: '2025-11-15T13:29:04.000Z'
id: FACT-papra-documents-trash-documents-batch-handles-a-result-set-larger-than-the-sql
type: fact
---
Handles a result set larger than the SQL host-parameter limit by chunking the soft-delete.

Modeled from REQ-papra-documents-handles-result-set-larger-than-sql-host so the claim can be checked for contradictions.
