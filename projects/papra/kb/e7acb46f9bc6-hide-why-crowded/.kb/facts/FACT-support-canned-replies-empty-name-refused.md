---
title: support.canned_replies empty_name_refused = True
status: active
fact_kind: property_value
subject_key: support.canned_replies
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-support-canned-replies-names-trimmed
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-137'
  recorded_at: '2025-04-25T16:12:26.000Z'
id: FACT-support-canned-replies-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-support-canned-replies-names-trimmed so the claim can be checked for contradictions.
