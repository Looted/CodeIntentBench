---
title: support.ticket_tags empty_name_refused = True
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: empty_name_refused
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-70D5F8163A64221A
claim_text: a name that is empty after trimming is refused
text_ref: REQ-support-ticket-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-114'
  recorded_at: '2025-02-20T10:16:44.000Z'
id: FACT-support-ticket-tags-empty-name-refused
type: fact
---
A name that is empty after trimming is refused.

Modeled from REQ-support-ticket-tags-names-trimmed so the claim can be checked for contradictions.
