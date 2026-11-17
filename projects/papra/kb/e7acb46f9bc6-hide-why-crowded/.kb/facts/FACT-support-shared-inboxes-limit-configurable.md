---
title: support.shared_inboxes limit_configurable = True
status: active
fact_kind: property_value
subject_key: support.shared_inboxes
property_key: limit_configurable
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-AF6717F4E0A15E09
claim_text: the limit is configured per deployment and 3 is the default
text_ref: REQ-support-shared-inboxes-maximum-count
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-312'
  recorded_at: '2026-06-07T12:50:48.000Z'
id: FACT-support-shared-inboxes-limit-configurable
type: fact
---
The limit is configured per deployment and 3 is the default.

Modeled from REQ-support-shared-inboxes-maximum-count so the claim can be checked for contradictions.
