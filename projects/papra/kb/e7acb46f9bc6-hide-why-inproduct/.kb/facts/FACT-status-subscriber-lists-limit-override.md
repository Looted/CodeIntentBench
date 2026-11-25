---
title: status.subscriber_lists limit_override = none
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: limit_override
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-656B7DEF00793B49
claim_text: The subscriber list limit on the status page cannot be changed for an individual status page
text_ref: REQ-status-subscriber-lists-limit-override
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-151'
  recorded_at: '2026-09-07T10:49:48.000Z'
id: FACT-status-subscriber-lists-limit-override
type: fact
---
The subscriber list limit on the status page cannot be changed for an individual status page.

Modeled from REQ-status-subscriber-lists-limit-override so the claim can be checked for contradictions.
