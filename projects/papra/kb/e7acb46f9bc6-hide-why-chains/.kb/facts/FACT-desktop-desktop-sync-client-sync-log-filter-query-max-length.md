---
title: desktop.desktop_sync_client_sync_log_filter query_max_length = 64
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_sync_log_filter
property_key: query_max_length
operator: eq
value_type: int
value_int: 64
claim_key: CLAIM-17EBB55B45BA2AB7
claim_text: A query in the desktop sync client's sync log filter is limited to 64 characters
text_ref: REQ-desktop-desktop-sync-client-sync-log-filter-query-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-228'
  recorded_at: '2025-07-06T10:54:36.000Z'
id: FACT-desktop-desktop-sync-client-sync-log-filter-query-max-length
type: fact
---
A query in the desktop sync client's sync log filter is limited to 64 characters.

Modeled from REQ-desktop-desktop-sync-client-sync-log-filter-query-length so the claim can be checked for contradictions.
