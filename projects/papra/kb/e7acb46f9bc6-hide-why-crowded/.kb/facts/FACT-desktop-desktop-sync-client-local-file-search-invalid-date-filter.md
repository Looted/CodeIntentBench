---
title: desktop.desktop_sync_client_local_file_search invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_local_file_search
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-413CB20122E6FDCB
claim_text: 'An invalid date in the modified: filter of the desktop sync client''s local file search is ignored and the other filters still apply'
text_ref: REQ-desktop-desktop-sync-client-local-file-search-invalid-date
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-196'
  recorded_at: '2026-01-22T11:38:58.000Z'
id: FACT-desktop-desktop-sync-client-local-file-search-invalid-date-filter
type: fact
---
An invalid date in the modified: filter of the desktop sync client's local file search is ignored and the other filters still apply.

Modeled from REQ-desktop-desktop-sync-client-local-file-search-invalid-date so the claim can be checked for contradictions.
