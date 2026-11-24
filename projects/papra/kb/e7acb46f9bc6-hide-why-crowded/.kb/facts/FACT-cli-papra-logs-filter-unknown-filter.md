---
title: cli.papra_logs_filter unknown_filter = plain text
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: unknown_filter
operator: eq
value_type: string
value_string: plain text
claim_key: CLAIM-526340A43FEC6821
claim_text: A filter name that the `papra logs` filter does not know is treated as plain search text
text_ref: REQ-cli-papra-logs-filter-unknown-filter
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-200'
  recorded_at: '2026-09-11T08:46:47.000Z'
id: FACT-cli-papra-logs-filter-unknown-filter
type: fact
---
A filter name that the `papra logs` filter does not know is treated as plain search text.

Modeled from REQ-cli-papra-logs-filter-unknown-filter so the claim can be checked for contradictions.
