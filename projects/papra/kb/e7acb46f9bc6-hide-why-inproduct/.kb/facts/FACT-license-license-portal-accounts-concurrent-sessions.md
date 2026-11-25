---
title: license.license_portal_accounts concurrent_sessions = 2
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: concurrent_sessions
operator: eq
value_type: int
value_int: 2
claim_key: CLAIM-491BEA3BFEBE9CDA
claim_text: A license portal account can have at most 2 sessions at a time
text_ref: REQ-license-license-portal-accounts-concurrent-sessions
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-194'
  recorded_at: '2026-05-14T12:20:27.000Z'
id: FACT-license-license-portal-accounts-concurrent-sessions
type: fact
---
A license portal account can have at most 2 sessions at a time.

Modeled from REQ-license-license-portal-accounts-concurrent-sessions so the claim can be checked for contradictions.
