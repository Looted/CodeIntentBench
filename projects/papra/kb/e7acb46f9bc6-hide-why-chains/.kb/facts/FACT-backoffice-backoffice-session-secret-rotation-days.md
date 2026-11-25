---
title: backoffice.backoffice_session_secret rotation_days = 365
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: rotation_days
operator: eq
value_type: int
value_int: 365
claim_key: CLAIM-A91BA4DB90E7CB37
claim_text: BACKOFFICE_SESSION_SECRET is rotated every 365 days
text_ref: REQ-backoffice-backoffice-session-secret-rotation
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-355'
  recorded_at: '2026-05-15T10:05:47.000Z'
id: FACT-backoffice-backoffice-session-secret-rotation-days
type: fact
---
BACKOFFICE_SESSION_SECRET is rotated every 365 days.

Modeled from REQ-backoffice-backoffice-session-secret-rotation so the claim can be checked for contradictions.
