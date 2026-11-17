---
title: cli.papra_logs_filter invalid_date_filter = rejected
status: active
fact_kind: property_value
subject_key: cli.papra_logs_filter
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-D7BA1C0883D49721
claim_text: 'An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value'
text_ref: REQ-cli-papra-logs-filter-invalid-date
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-181'
  recorded_at: '2025-05-09T15:52:35.000Z'
id: FACT-cli-papra-logs-filter-invalid-date-filter
type: fact
---
An invalid date in the since: filter of the `papra logs` filter is rejected with a message that names the value.

Modeled from REQ-cli-papra-logs-filter-invalid-date so the claim can be checked for contradictions.
