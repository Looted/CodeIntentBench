---
title: cli.import_labels name_trimmed = True
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-895E15067F601F80
claim_text: Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-cli-import-labels-names-trimmed
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-160'
  recorded_at: '2026-09-16T16:22:38.000Z'
id: FACT-cli-import-labels-name-trimmed
type: fact
---
Import label names in the papra CLI are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-cli-import-labels-names-trimmed so the claim can be checked for contradictions.
