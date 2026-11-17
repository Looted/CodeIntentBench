---
title: desktop.desktop_sync_client_local_file_search query_min_length = 3
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_local_file_search
property_key: query_min_length
operator: eq
value_type: int
value_int: 3
claim_key: CLAIM-FC937A4A3D8EDCF2
claim_text: The desktop sync client's local file search runs only once the query has at least 3 characters
text_ref: REQ-desktop-desktop-sync-client-local-file-search-minimum-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-206'
  recorded_at: '2025-11-18T14:01:58.000Z'
id: FACT-desktop-desktop-sync-client-local-file-search-query-min-length
type: fact
---
The desktop sync client's local file search runs only once the query has at least 3 characters.

Modeled from REQ-desktop-desktop-sync-client-local-file-search-minimum-length so the claim can be checked for contradictions.
