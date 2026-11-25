---
title: auth.password_reset revokes_sessions = True
status: deprecated
fact_kind: property_value
subject_key: auth.password_reset
property_key: revokes_sessions
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-C96B0C216066BFFA
claim_text: Resetting a password revokes all of the user's sessions
text_ref: REQ-papra-password-reset-signs-out-everywhere
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-102'
  recorded_at: '2025-05-20T08:03:11.000Z'
id: FACT-papra-auth-password-reset-revokes-sessions-2b5839
type: fact
---
Resetting a password revokes all of the user's sessions.

Modeled from REQ-papra-password-reset-signs-out-everywhere so the claim can be checked for contradictions.
