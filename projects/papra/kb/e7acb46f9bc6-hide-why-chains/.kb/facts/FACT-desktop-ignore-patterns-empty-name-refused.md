---
title: desktop.ignore_patterns empty_name_refused = True
status: active
fact_kind: property_value
subject_key: desktop.ignore_patterns
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-desktop-ignore-patterns-names-trimmed
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-148'
  recorded_at: '2026-03-06T15:40:03.000Z'
id: FACT-desktop-ignore-patterns-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-desktop-ignore-patterns-names-trimmed so the claim can be checked for contradictions.
