---
title: support.ticket_tags name_trimmed = True
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: name_trimmed
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-1CD28815F9C21E4C
claim_text: Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved
text_ref: REQ-support-ticket-tags-names-trimmed
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-114'
  recorded_at: '2025-02-20T10:16:44.000Z'
id: FACT-support-ticket-tags-name-trimmed
type: fact
---
Ticket tag names in the support portal are trimmed of leading and trailing whitespace before they are saved.

Modeled from REQ-support-ticket-tags-names-trimmed so the claim can be checked for contradictions.
