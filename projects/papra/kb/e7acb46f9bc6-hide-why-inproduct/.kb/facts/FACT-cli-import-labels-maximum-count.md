---
title: cli.import_labels maximum_count = 100
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: maximum_count
operator: eq
value_type: int
value_int: 100
claim_key: CLAIM-D045F373BCE20728
claim_text: At most 100 import labels can be created per import run in the papra CLI
text_ref: REQ-cli-import-labels-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-156'
  recorded_at: '2026-07-28T17:48:48.000Z'
id: FACT-cli-import-labels-maximum-count
type: fact
---
At most 100 import labels can be created per import run in the papra CLI.

Modeled from REQ-cli-import-labels-maximum-count so the claim can be checked for contradictions.
