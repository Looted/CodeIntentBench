---
title: desktop.desktop_sync_client_sync_log_filter invalid_date_filter = ignored
status: active
fact_kind: property_value
subject_key: desktop.desktop_sync_client_sync_log_filter
property_key: invalid_date_filter
operator: eq
value_type: string
value_string: ignored
claim_key: CLAIM-B5282EA15B49D7B9
claim_text: 'An invalid date in the synced: filter of the desktop sync client''s sync log filter is ignored and the other filters still apply'
text_ref: REQ-desktop-desktop-sync-client-sync-log-filter-invalid-date
tags:
  - lane:strict
  - knowledge-source:desktop-decisions
origin:
  kind: agent
  ref: 'Desktop sync client decision log: DSK-233'
  recorded_at: '2026-07-18T12:15:11.000Z'
id: FACT-desktop-desktop-sync-client-sync-log-filter-invalid-date-filter
type: fact
---
An invalid date in the synced: filter of the desktop sync client's sync log filter is ignored and the other filters still apply.

Modeled from REQ-desktop-desktop-sync-client-sync-log-filter-invalid-date so the claim can be checked for contradictions.
