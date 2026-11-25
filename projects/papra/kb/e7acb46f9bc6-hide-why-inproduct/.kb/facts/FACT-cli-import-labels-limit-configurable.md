---
title: cli.import_labels limit_configurable = False
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-cli-import-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-156'
  recorded_at: '2026-07-28T17:48:48.000Z'
id: FACT-cli-import-labels-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-cli-import-labels-maximum-count so the claim can be checked for contradictions.
