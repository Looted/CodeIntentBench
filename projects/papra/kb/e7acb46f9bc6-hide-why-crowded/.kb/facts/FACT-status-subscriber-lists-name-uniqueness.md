---
title: status.subscriber_lists name_uniqueness = not unique
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: name_uniqueness
operator: eq
value_type: string
value_string: not unique
claim_key: CLAIM-9290FE3E47BD53C7
claim_text: Subscriber list names on the status page are not required to be unique
text_ref: REQ-status-subscriber-lists-name-uniqueness
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-274'
  recorded_at: '2025-06-14T13:02:08.000Z'
id: FACT-status-subscriber-lists-name-uniqueness
type: fact
---
Subscriber list names on the status page are not required to be unique.

Modeled from REQ-status-subscriber-lists-name-uniqueness so the claim can be checked for contradictions.
