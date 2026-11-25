---
title: desktop.desktop_sync_client_sync_log_filter page_size_maximum = 20
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_sync_log_filter
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 20
claim_key: CLAIM-3E729AA3837000F5
claim_text: The desktop sync client's sync log filter returns at most 20 results per page
text_ref: REQ-desktop-desktop-sync-client-sync-log-filter-page-size
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-243'
  recorded_at: '2026-05-03T10:54:43.000Z'
id: FACT-desktop-desktop-sync-client-sync-log-filter-page-size-maximum
type: fact
---
The desktop sync client's sync log filter returns at most 20 results per page.

Modeled from REQ-desktop-desktop-sync-client-sync-log-filter-page-size so the claim can be checked for contradictions.
