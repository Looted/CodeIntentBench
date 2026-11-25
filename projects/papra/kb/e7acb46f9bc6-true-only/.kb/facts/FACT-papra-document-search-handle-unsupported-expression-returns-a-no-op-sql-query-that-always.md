---
title: document_search.handle_unsupported_expression returns_a_no_op_sql_query_that_always = True
status: active
fact_kind: property_value
subject_key: document_search.handle_unsupported_expression
property_key: returns_a_no_op_sql_query_that_always
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-DECC7B078FDD9369
claim_text: Returns a no-op SQL query that always evaluates to false
text_ref: REQ-papra-document-search-returns-no-op-sql-query-that-always
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-951'
  recorded_at: '2025-11-18T14:04:20.000Z'
id: FACT-papra-document-search-handle-unsupported-expression-returns-a-no-op-sql-query-that-always
type: fact
---
Returns a no-op SQL query that always evaluates to false.

Modeled from REQ-papra-document-search-returns-no-op-sql-query-that-always so the claim can be checked for contradictions.
