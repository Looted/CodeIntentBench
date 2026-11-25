---
title: support.shared_inboxes name_max_length = 32
status: active
fact_kind: property_value
subject_key: support.shared_inboxes
property_key: name_max_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-6F7B25138EF4B93E
claim_text: Shared inbox names in the support portal are between 3 and 32 characters long
text_ref: REQ-support-shared-inboxes-name-length
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-333'
  recorded_at: '2025-10-04T10:14:51.000Z'
id: FACT-support-shared-inboxes-name-max-length
type: fact
---
Shared inbox names in the support portal are between 3 and 32 characters long.

Modeled from REQ-support-shared-inboxes-name-length so the claim can be checked for contradictions.
