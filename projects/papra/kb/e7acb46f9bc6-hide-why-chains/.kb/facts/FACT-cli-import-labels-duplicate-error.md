---
title: cli.import_labels duplicate_error = import-label-already-exists
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: duplicate_error
operator: eq
value_type: string
value_string: import-label-already-exists
claim_key: CLAIM-9236DF0EA757B642
claim_text: a duplicate is reported as import-label-already-exists
text_ref: REQ-cli-import-labels-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-153'
  recorded_at: '2025-06-20T11:52:26.000Z'
id: FACT-cli-import-labels-duplicate-error
type: fact
---
A duplicate is reported as import-label-already-exists.

Modeled from REQ-cli-import-labels-unique-ignoring-case so the claim can be checked for contradictions.
