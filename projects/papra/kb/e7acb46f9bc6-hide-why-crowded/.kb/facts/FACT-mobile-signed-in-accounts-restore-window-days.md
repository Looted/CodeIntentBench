---
title: mobile.signed_in_accounts restore_window_days = 30
status: active
fact_kind: property_value
subject_key: mobile.signed_in_accounts
property_key: restore_window_days
operator: eq
value_type: int
value_int: 30
claim_key: CLAIM-1CCF3B322905D870
claim_text: A deleted signed-in account in the mobile app can be restored for 30 days
text_ref: REQ-mobile-signed-in-accounts-deletion-grace
tags:
  - lane:strict
  - knowledge-source:mobile-decisions
origin:
  kind: agent
  ref: 'Mobile app decision log (apps/mobile): MOB-358'
  recorded_at: '2025-02-26T10:57:03.000Z'
id: FACT-mobile-signed-in-accounts-restore-window-days
type: fact
---
A deleted signed-in account in the mobile app can be restored for 30 days.

Modeled from REQ-mobile-signed-in-accounts-deletion-grace so the claim can be checked for contradictions.
