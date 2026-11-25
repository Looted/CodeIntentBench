---
title: support.support_portal_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: support.support_portal_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-support-support-portal-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:support-decisions
origin:
  kind: agent
  ref: 'Support portal decision log: SUP-244'
  recorded_at: '2025-12-16T08:27:46.000Z'
id: FACT-support-support-portal-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-support-support-portal-accounts-concurrent-sessions so the claim can be checked for contradictions.
