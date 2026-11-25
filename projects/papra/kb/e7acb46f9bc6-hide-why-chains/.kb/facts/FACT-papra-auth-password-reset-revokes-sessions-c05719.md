---
title: auth.password_reset revokes_sessions = False
status: deprecated
fact_kind: property_value
subject_key: auth.password_reset
property_key: revokes_sessions
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-6CF2C2C3A894B63E
claim_text: Resetting a password keeps the user's other sessions signed in
text_ref: REQ-papra-password-reset-keeps-other-devices
tags:
  - lane:strict
  - knowledge-source:papra-server-decisions
origin:
  kind: agent
  ref: 'Papra server decision log: SRV-151'
  recorded_at: '2025-10-07T14:26:52.000Z'
id: FACT-papra-auth-password-reset-revokes-sessions-c05719
type: fact
---
Resetting a password keeps the user's other sessions signed in.

Modeled from REQ-papra-password-reset-keeps-other-devices so the claim can be checked for contradictions.
