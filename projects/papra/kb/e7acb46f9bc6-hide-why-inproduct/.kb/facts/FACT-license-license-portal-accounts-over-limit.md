---
title: license.license_portal_accounts over_limit = oldest ended
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: over_limit
operator: eq
value_type: string
value_string: oldest ended
claim_key: CLAIM-D659683A97EF2AD8
claim_text: signing in beyond that ends the oldest one
text_ref: REQ-license-license-portal-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-194'
  recorded_at: '2026-05-14T12:20:27.000Z'
id: FACT-license-license-portal-accounts-over-limit
type: fact
---
Signing in beyond that ends the oldest one.

Modeled from REQ-license-license-portal-accounts-concurrent-sessions so the claim can be checked for contradictions.
