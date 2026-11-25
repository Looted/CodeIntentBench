---
title: document_search.handle_document_has_date_filter just_the_equality_operator_is_supported_for_has = True
status: active
fact_kind: property_value
subject_key: document_search.handle_document_has_date_filter
property_key: just_the_equality_operator_is_supported_for_has
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-25020DE0A246AE3F
claim_text: Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false
text_ref: REQ-papra-document-search-just-equality-operator-is-supported-for-has
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-944'
  recorded_at: '2025-05-02T15:42:41.000Z'
id: FACT-papra-document-search-handle-document-has-date-filter-just-the-equality-operator-is-supported-for-has
type: fact
---
Just the equality operator is supported ("=") for has filters, other operators return an issue and a no-op SQL query that evaluates to false.

Modeled from REQ-papra-document-search-just-equality-operator-is-supported-for-has so the claim can be checked for contradictions.
