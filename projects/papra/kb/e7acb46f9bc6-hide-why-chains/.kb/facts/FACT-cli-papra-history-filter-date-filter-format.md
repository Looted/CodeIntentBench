---
title: cli.papra_history_filter date_filter_format = YYYY-MM-DD or YYYY/MM/DD
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: date_filter_format
operator: eq
value_type: string
value_string: YYYY-MM-DD or YYYY/MM/DD
claim_key: CLAIM-FC56B7622CB9846F
claim_text: 'The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD'
text_ref: REQ-cli-papra-history-filter-date-format
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-226'
  recorded_at: '2025-10-25T08:10:54.000Z'
id: FACT-cli-papra-history-filter-date-filter-format
type: fact
---
The ran: filter of the `papra history` filter accepts dates as YYYY-MM-DD and as YYYY/MM/DD.

Modeled from REQ-cli-papra-history-filter-date-format so the claim can be checked for contradictions.
