---
title: documents.resolve_batch_target_document_ids on_the_query_path_delegates_to_the_search = True
status: active
fact_kind: property_value
subject_key: documents.resolve_batch_target_document_ids
property_key: on_the_query_path_delegates_to_the_search
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-6A89111DADA742AE
claim_text: On the query path, delegates to the search service without enforcing a cap
text_ref: REQ-papra-documents-on-query-path-delegates-to-search-service
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-1073'
  recorded_at: '2025-08-17T11:53:17.000Z'
id: FACT-papra-documents-resolve-batch-target-document-ids-on-the-query-path-delegates-to-the-search
type: fact
---
On the query path, delegates to the search service without enforcing a cap.

Modeled from REQ-papra-documents-on-query-path-delegates-to-search-service so the claim can be checked for contradictions.
