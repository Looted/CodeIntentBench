---
title: portal.partner_portal_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: portal.partner_portal_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-portal-partner-portal-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:portal-decisions
origin:
  kind: agent
  ref: 'Partner portal decision log: PRT-371'
  recorded_at: '2026-05-01T08:29:16.000Z'
id: FACT-portal-partner-portal-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-portal-partner-portal-accounts-concurrent-sessions so the claim can be checked for contradictions.
