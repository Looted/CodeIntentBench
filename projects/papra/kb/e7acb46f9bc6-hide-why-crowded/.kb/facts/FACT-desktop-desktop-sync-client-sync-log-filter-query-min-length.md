---
title: desktop.desktop_sync_client_sync_log_filter query_min_length = 3
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_sync_log_filter
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-02A1B5976606C284
claim_text: The desktop sync client's sync log filter runs only once the query has at least 3 characters
text_ref: REQ-desktop-desktop-sync-client-sync-log-filter-minimum-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-238'
  recorded_at: '2026-03-05T13:10:33.000Z'
id: FACT-desktop-desktop-sync-client-sync-log-filter-query-min-length
type: fact
---
The desktop sync client's sync log filter runs only once the query has at least 3 characters.

Modeled from REQ-desktop-desktop-sync-client-sync-log-filter-minimum-length so the claim can be checked for contradictions.
