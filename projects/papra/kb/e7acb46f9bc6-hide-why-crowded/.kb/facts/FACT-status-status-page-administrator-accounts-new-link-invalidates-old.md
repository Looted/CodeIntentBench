---
title: status.status_page_administrator_accounts new_link_invalidates_old = True
status: active
fact_kind: property_value
subject_key: status.status_page_administrator_accounts
property_key: new_link_invalidates_old
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-A6758D585E12B6CF
claim_text: requesting a new link invalidates the earlier ones
text_ref: REQ-status-status-page-administrator-accounts-reset-link-single-use
tags:
  - lane:strict
  - knowledge-source:status-decisions
origin:
  kind: agent
  ref: 'Status page runbook: STA-292'
  recorded_at: '2026-06-12T12:02:09.000Z'
id: FACT-status-status-page-administrator-accounts-new-link-invalidates-old
type: fact
---
Requesting a new link invalidates the earlier ones.

Modeled from REQ-status-status-page-administrator-accounts-reset-link-single-use so the claim can be checked for contradictions.
