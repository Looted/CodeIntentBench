---
title: backoffice.backoffice_session_secret rotation_overlap_hours = 48
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 48
claim_key: CLAIM-40B0302E57698F6D
claim_text: the previous value stays valid for 48 hours after a rotation
text_ref: REQ-backoffice-backoffice-session-secret-rotation
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-355'
  recorded_at: '2026-05-15T10:05:47.000Z'
id: FACT-backoffice-backoffice-session-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 48 hours after a rotation.

Modeled from REQ-backoffice-backoffice-session-secret-rotation so the claim can be checked for contradictions.
