---
title: support.ticket_tags name_uniqueness = unique ignoring letter case
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: name_uniqueness
operator: eq
value_type: string
value_string: unique ignoring letter case
claim_key: CLAIM-5DA39052B26AA686
claim_text: Ticket tags in the support portal are unique per site regardless of letter case
text_ref: REQ-support-ticket-tags-unique-ignoring-case
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-102'
  recorded_at: '2025-04-16T11:20:31.000Z'
id: FACT-support-ticket-tags-name-uniqueness
type: fact
---
Ticket tags in the support portal are unique per site regardless of letter case.

Modeled from REQ-support-ticket-tags-unique-ignoring-case so the claim can be checked for contradictions.
