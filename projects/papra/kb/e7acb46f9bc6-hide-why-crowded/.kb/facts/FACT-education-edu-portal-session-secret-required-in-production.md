---
title: education.edu_portal_session_secret required_in_production = True
status: active
fact_kind: property_value
subject_key: education.edu_portal_session_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: true
claim_key: CLAIM-8BA1DE3853A4C15D
claim_text: The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET
text_ref: REQ-education-edu-portal-session-secret-required-in-production
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-159'
  recorded_at: '2026-08-07T15:06:33.000Z'
id: FACT-education-edu-portal-session-secret-required-in-production
type: fact
---
The education portal refuses to start in production without EDU_PORTAL_SESSION_SECRET.

Modeled from REQ-education-edu-portal-session-secret-required-in-production so the claim can be checked for contradictions.
