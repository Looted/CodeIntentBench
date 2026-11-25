---
title: support.ticket_tags delete_in_use = detached
status: active
fact_kind: property_value
subject_key: support.ticket_tags
property_key: delete_in_use
operator: eq
value_type: string
value_string: detached
claim_key: CLAIM-7319D2BC97562F70
claim_text: Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use
text_ref: REQ-support-ticket-tags-delete-in-use
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-118'
  recorded_at: '2026-09-09T10:53:28.000Z'
id: FACT-support-ticket-tags-delete-in-use
type: fact
---
Deleting a ticket tag in the support portal removes it from everything that uses it, without confirmation for each use.

Modeled from REQ-support-ticket-tags-delete-in-use so the claim can be checked for contradictions.
