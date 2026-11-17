---
title: cli.import_labels delete_in_use = refused
status: active
fact_kind: property_value
subject_key: cli.import_labels
property_key: delete_in_use
operator: eq
value_type: string
value_string: refused
claim_key: CLAIM-1903762DA0F675AA
claim_text: Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it
text_ref: REQ-cli-import-labels-delete-in-use
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-173'
  recorded_at: '2025-06-11T14:53:12.000Z'
id: FACT-cli-import-labels-delete-in-use
type: fact
---
Deleting an import label in the papra CLI that is still in use is refused until nothing refers to it.

Modeled from REQ-cli-import-labels-delete-in-use so the claim can be checked for contradictions.
