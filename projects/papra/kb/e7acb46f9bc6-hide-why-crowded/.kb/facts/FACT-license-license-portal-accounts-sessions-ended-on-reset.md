---
title: license.license_portal_accounts sessions_ended_on_reset = none
status: active
fact_kind: property_value
subject_key: license.license_portal_accounts
property_key: sessions_ended_on_reset
operator: eq
value_type: string
value_string: none
claim_key: CLAIM-0FC7B6DF069023C5
claim_text: Resetting the password of a license portal account leaves existing sessions signed in until they expire
text_ref: REQ-license-license-portal-accounts-reset-and-sessions
tags:
  - lane:strict
  - knowledge-source:license-decisions
origin:
  kind: agent
  ref: 'License server decision log: LIC-250'
  recorded_at: '2026-04-24T16:19:39.000Z'
id: FACT-license-license-portal-accounts-sessions-ended-on-reset
type: fact
---
Resetting the password of a license portal account leaves existing sessions signed in until they expire.

Modeled from REQ-license-license-portal-accounts-reset-and-sessions so the claim can be checked for contradictions.
