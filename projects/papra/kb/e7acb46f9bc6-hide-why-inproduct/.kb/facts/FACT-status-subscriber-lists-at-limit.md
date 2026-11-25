---
title: status.subscriber_lists at_limit = refused, limit not named
status: active
fact_kind: property_value
subject_key: status.subscriber_lists
property_key: at_limit
operator: eq
value_type: string
value_string: refused, limit not named
claim_key: CLAIM-04FDBEB25B23E680
claim_text: Creating a subscriber list on the status page when the status page is at the limit is refused without disclosing the limit
text_ref: REQ-status-subscriber-lists-at-the-limit
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-153'
  recorded_at: '2025-02-07T16:57:18.000Z'
id: FACT-status-subscriber-lists-at-limit
type: fact
---
Creating a subscriber list on the status page when the status page is at the limit is refused without disclosing the limit.

Modeled from REQ-status-subscriber-lists-at-the-limit so the claim can be checked for contradictions.
