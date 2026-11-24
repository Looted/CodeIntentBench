---
title: desktop.desktop_sync_client_local_file_search page_size_maximum = 50
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_local_file_search
property_key: page_size_maximum
operator: eq
value_type: int
value_int: 50
claim_key: CLAIM-625C947A33C78BE7
claim_text: The desktop sync client's local file search returns at most 50 results per page
text_ref: REQ-desktop-desktop-sync-client-local-file-search-page-size
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-211'
  recorded_at: '2026-01-05T17:51:25.000Z'
id: FACT-desktop-desktop-sync-client-local-file-search-page-size-maximum
type: fact
---
The desktop sync client's local file search returns at most 50 results per page.

Modeled from REQ-desktop-desktop-sync-client-local-file-search-page-size so the claim can be checked for contradictions.
