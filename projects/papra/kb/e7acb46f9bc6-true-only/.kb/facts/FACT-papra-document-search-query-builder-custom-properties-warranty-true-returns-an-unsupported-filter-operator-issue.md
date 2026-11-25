---
title: document_search.query_builder_custom_properties warranty_true_returns_an_unsupported_filter_operator_issue = True
status: active
fact_kind: property_value
subject_key: document_search.query_builder_custom_properties
property_key: warranty_true_returns_an_unsupported_filter_operator_issue
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-4592A872FA575CFF
claim_text: Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators
text_ref: REQ-papra-document-search-warranty-true-returns-unsupported-filter-operator-issue
tags:
  - lane:strict
  - knowledge-source:papra-server-tests
origin:
  kind: agent
  ref: 'Papra server behaviour notes: SRV-879'
  recorded_at: '2025-10-23T10:11:10.000Z'
id: FACT-papra-document-search-query-builder-custom-properties-warranty-true-returns-an-unsupported-filter-operator-issue
type: fact
---
Warranty:>true returns an UNSUPPORTED_FILTER_OPERATOR issue for non-equality operators.

Modeled from REQ-papra-document-search-warranty-true-returns-unsupported-filter-operator-issue so the claim can be checked for contradictions.
