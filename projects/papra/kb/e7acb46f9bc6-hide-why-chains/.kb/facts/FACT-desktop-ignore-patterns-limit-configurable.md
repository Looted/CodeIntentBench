---
title: desktop.ignore_patterns limit_configurable = True
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-D7D6BB55704C85FF
claim_text: the limit is configurable and 150 is the default
text_ref: REQ-desktop-ignore-patterns-maximum-count
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-141'
  recorded_at: '2026-06-12T12:06:54.000Z'
id: FACT-desktop-ignore-patterns-limit-configurable
type: fact
---
The limit is configurable and 150 is the default.

Modeled from REQ-desktop-ignore-patterns-maximum-count so the claim can be checked for contradictions.
