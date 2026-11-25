---
title: cli.papra_logs_filter date_filter_format = ISO or relative words
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: date_filter_format
operator: eq
value_type: string
value_string: ISO or relative words
claim_key: CLAIM-2A365240B2542A5D
claim_text: 'The since: filter of the `papra logs` filter accepts ISO dates and the words today, yesterday and last-week'
text_ref: REQ-cli-papra-logs-filter-date-format
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-197'
  recorded_at: '2025-09-01T16:56:26.000Z'
id: FACT-cli-papra-logs-filter-date-filter-format
type: fact
---
The since: filter of the `papra logs` filter accepts ISO dates and the words today, yesterday and last-week.

Modeled from REQ-cli-papra-logs-filter-date-format so the claim can be checked for contradictions.
