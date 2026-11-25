---
title: support.canned_replies duplicate_error = canned-reply-already-exists
status: active
fact_kind: property_value
subject_key: support.canned_replies
property_key: duplicate_error
operator: eq
value_type: string
value_string: canned-reply-already-exists
claim_key: CLAIM-252FEB0BB1BAA29D
claim_text: a duplicate is reported as canned-reply-already-exists
text_ref: REQ-support-canned-replies-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-101'
  recorded_at: '2025-10-02T10:18:53.000Z'
id: FACT-support-canned-replies-duplicate-error
type: fact
---
A duplicate is reported as canned-reply-already-exists.

Modeled from REQ-support-canned-replies-unique-ignoring-case so the claim can be checked for contradictions.
