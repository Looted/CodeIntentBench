---
title: support.ticket_tags duplicate_error = ticket-tag-already-exists
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: duplicate_error
operator: eq
value_type: string
value_string: ticket-tag-already-exists
claim_key: CLAIM-29EB900F3E3758A8
claim_text: a duplicate is reported as ticket-tag-already-exists
text_ref: REQ-support-ticket-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-102'
  recorded_at: '2025-04-16T11:20:31.000Z'
id: FACT-support-ticket-tags-duplicate-error
type: fact
---
A duplicate is reported as ticket-tag-already-exists.

Modeled from REQ-support-ticket-tags-unique-ignoring-case so the claim can be checked for contradictions.
