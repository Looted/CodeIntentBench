---
title: education.edu_portal_session_secret value_logged = False
status: active
fact_kind: property_value
subject_key: education.edu_portal_session_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-A3D60DBDD6138EA6
claim_text: The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs
text_ref: REQ-education-edu-portal-session-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-179'
  recorded_at: '2025-08-21T08:39:13.000Z'
id: FACT-education-edu-portal-session-secret-value-logged
type: fact
---
The education portal never writes EDU_PORTAL_SESSION_SECRET or a value derived from it to its logs.

Modeled from REQ-education-edu-portal-session-secret-never-logged so the claim can be checked for contradictions.
