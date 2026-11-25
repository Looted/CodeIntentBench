---
title: document_search.handle_empty_expression when_the_expression_is_empty_it_returns_a = True
status: active
fact_kind: property_value
subject_key: document_search.handle_empty_expression
property_key: when_the_expression_is_empty_it_returns_a
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-590A791D7D6A7CCE
claim_text: When the expression is empty, it returns a no-op SQL query that always evaluates to true
text_ref: REQ-papra-document-search-expression-is-empty-it-returns-no-op
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-961'
  recorded_at: '2025-07-15T10:12:32.000Z'
id: FACT-papra-document-search-handle-empty-expression-when-the-expression-is-empty-it-returns-a
type: fact
---
When the expression is empty, it returns a no-op SQL query that always evaluates to true.

Modeled from REQ-papra-document-search-expression-is-empty-it-returns-no-op so the claim can be checked for contradictions.
