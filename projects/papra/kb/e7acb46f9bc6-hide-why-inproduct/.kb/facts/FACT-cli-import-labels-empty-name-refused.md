---
title: cli.import_labels empty_name_refused = True
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-cli-import-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-160'
  recorded_at: '2026-09-16T16:22:38.000Z'
id: FACT-cli-import-labels-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-cli-import-labels-names-trimmed so the claim can be checked for contradictions.
