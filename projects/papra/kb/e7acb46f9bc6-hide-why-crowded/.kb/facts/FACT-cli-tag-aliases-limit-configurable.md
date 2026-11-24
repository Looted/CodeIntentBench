---
title: cli.tag_aliases limit_configurable = False
status: active
fact_kind: property_value
subject_key: cli.tag_aliases
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9B85215C347D6099
claim_text: the limit is fixed
text_ref: REQ-cli-tag-aliases-maximum-count
tags:
  - lane:strict
  - knowledge-source:cli-decisions
origin:
  kind: agent
  ref: 'CLI design notes (packages/cli): CLI-108'
  recorded_at: '2025-09-13T10:14:39.000Z'
id: FACT-cli-tag-aliases-limit-configurable
type: fact
---
The limit is fixed.

Modeled from REQ-cli-tag-aliases-maximum-count so the claim can be checked for contradictions.
