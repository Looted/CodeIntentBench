---
title: desktop.desktop_sync_client_sync_log_filter over_length_input = rejected
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_sync_log_filter
property_key: over_length_input
operator: eq
value_type: string
value_string: rejected
claim_key: CLAIM-778F39B5CA222673
claim_text: longer input is rejected with a validation error
text_ref: REQ-desktop-desktop-sync-client-sync-log-filter-query-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-228'
  recorded_at: '2025-07-06T10:54:36.000Z'
id: FACT-desktop-desktop-sync-client-sync-log-filter-over-length-input
type: fact
---
Longer input is rejected with a validation error.

Modeled from REQ-desktop-desktop-sync-client-sync-log-filter-query-length so the claim can be checked for contradictions.
