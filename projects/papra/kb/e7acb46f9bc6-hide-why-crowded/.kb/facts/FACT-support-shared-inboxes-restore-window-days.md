---
title: support.shared_inboxes restore_window_days = 7
status: active
fact_kind: property_value
subject_key: support.shared_inboxes
property_key: restore_window_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-C07ADB6744718C8D
claim_text: A deleted shared inbox in the support portal can be restored for 7 days
text_ref: REQ-support-shared-inboxes-deletion-grace
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-335'
  recorded_at: '2025-02-06T11:58:17.000Z'
id: FACT-support-shared-inboxes-restore-window-days
type: fact
---
A deleted shared inbox in the support portal can be restored for 7 days.

Modeled from REQ-support-shared-inboxes-deletion-grace so the claim can be checked for contradictions.
