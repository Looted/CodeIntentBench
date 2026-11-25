---
title: cli.papra_logs_filter empty_query = not sent
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: empty_query
operator: eq
value_type: string
value_string: not sent
claim_key: CLAIM-900009E549509DBA
claim_text: An empty query in the `papra logs` filter is not sent
text_ref: REQ-cli-papra-logs-filter-empty-query
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-201'
  recorded_at: '2026-02-19T14:00:51.000Z'
id: FACT-cli-papra-logs-filter-empty-query
type: fact
---
An empty query in the `papra logs` filter is not sent.

Modeled from REQ-cli-papra-logs-filter-empty-query so the claim can be checked for contradictions.
