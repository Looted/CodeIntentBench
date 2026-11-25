---
title: portal.partner_portal_accounts session_days = 7
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: session_days
operator: eq
value_type: int
value_int: 7
claim_key: CLAIM-AB76EBC668632301
claim_text: Sessions of partner portal accounts last at most 7 days
text_ref: REQ-portal-partner-portal-accounts-session-lifetime
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-298'
  recorded_at: '2025-11-14T08:32:18.000Z'
id: FACT-portal-partner-portal-accounts-session-days
type: fact
---
Sessions of partner portal accounts last at most 7 days.

Modeled from REQ-portal-partner-portal-accounts-session-lifetime so the claim can be checked for contradictions.
