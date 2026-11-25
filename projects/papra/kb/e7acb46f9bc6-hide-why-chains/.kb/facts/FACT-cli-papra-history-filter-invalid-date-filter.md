---
title: cli.papra_history_filter invalid_date_filter = matches nothing
status: active
fact_kind: property_value
subject_key: cli.papra_history_filter
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: matches nothing
claim_key: CLAIM-CE8FFCC0F208CB76
claim_text: 'An invalid date in the ran: filter of the `papra history` filter makes the search return nothing'
text_ref: REQ-cli-papra-history-filter-invalid-date
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-205'
  recorded_at: '2026-01-23T08:36:16.000Z'
id: FACT-cli-papra-history-filter-invalid-date-filter
type: fact
---
An invalid date in the ran: filter of the `papra history` filter makes the search return nothing.

Modeled from REQ-cli-papra-history-filter-invalid-date so the claim can be checked for contradictions.
