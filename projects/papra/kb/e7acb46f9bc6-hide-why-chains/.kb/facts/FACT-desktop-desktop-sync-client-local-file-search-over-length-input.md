---
title: desktop.desktop_sync_client_local_file_search over_length_input = truncated
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_local_file_search
property_key: over_length_input
operator: eq
value_type: string
value_string: truncated
claim_key: CLAIM-7ABD8CACE2C520A4
claim_text: longer input is cut to the limit without an error
text_ref: REQ-desktop-desktop-sync-client-local-file-search-query-length
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-195'
  recorded_at: '2026-03-22T13:01:12.000Z'
id: FACT-desktop-desktop-sync-client-local-file-search-over-length-input
type: fact
---
Longer input is cut to the limit without an error.

Modeled from REQ-desktop-desktop-sync-client-local-file-search-query-length so the claim can be checked for contradictions.
