---
title: desktop.desktop_sync_client_local_file_search query_max_length = 500
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_local_file_search
property_key: query_max_length
operator: eq
value_type: int
value_int: 500
claim_key: CLAIM-9D6743ADBCFD0A05
claim_text: A query in the desktop sync client's local file search is limited to 500 characters
text_ref: REQ-desktop-desktop-sync-client-local-file-search-query-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-195'
  recorded_at: '2026-03-22T13:01:12.000Z'
id: FACT-desktop-desktop-sync-client-local-file-search-query-max-length
type: fact
---
A query in the desktop sync client's local file search is limited to 500 characters.

Modeled from REQ-desktop-desktop-sync-client-local-file-search-query-length so the claim can be checked for contradictions.
