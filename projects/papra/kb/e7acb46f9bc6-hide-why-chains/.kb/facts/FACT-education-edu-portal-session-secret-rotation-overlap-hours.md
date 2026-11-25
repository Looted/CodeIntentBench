---
title: education.edu_portal_session_secret rotation_overlap_hours = 24
status: active
fact_kind: property_value
subject_key: education.edu_portal_session_secret
property_key: rotation_overlap_hours
operator: eq
value_type: int
value_int: 24
claim_key: CLAIM-A45280A30BC5D577
claim_text: the previous value stays valid for 24 hours after a rotation
text_ref: REQ-education-edu-portal-session-secret-rotation
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-174'
  recorded_at: '2025-12-22T16:39:06.000Z'
id: FACT-education-edu-portal-session-secret-rotation-overlap-hours
type: fact
---
The previous value stays valid for 24 hours after a rotation.

Modeled from REQ-education-edu-portal-session-secret-rotation so the claim can be checked for contradictions.
