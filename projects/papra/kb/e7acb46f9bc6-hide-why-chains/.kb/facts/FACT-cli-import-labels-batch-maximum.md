---
title: cli.import_labels batch_maximum = 20
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: batch_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-FFDB7ED09AC82B4A
claim_text: At most 20 import labels can be added or removed in one request in the papra CLI
text_ref: REQ-cli-import-labels-batch-size
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-175'
  recorded_at: '2026-05-13T17:07:21.000Z'
id: FACT-cli-import-labels-batch-maximum
type: fact
---
At most 20 import labels can be added or removed in one request in the papra CLI.

Modeled from REQ-cli-import-labels-batch-size so the claim can be checked for contradictions.
