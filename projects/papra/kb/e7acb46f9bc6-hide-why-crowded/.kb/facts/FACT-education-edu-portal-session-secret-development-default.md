---
title: education.edu_portal_session_secret development_default = always required
status: active
fact_kind: property_value
subject_key: education.edu_portal_session_secret
property_key: development_default
operator: eq
value_type: string
value_string: always required
claim_key: CLAIM-F8CD35AC94CACC4C
claim_text: The education portal requires EDU_PORTAL_SESSION_SECRET in every environment, development included
text_ref: REQ-education-edu-portal-session-secret-development-default
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-182'
  recorded_at: '2026-05-09T09:16:28.000Z'
id: FACT-education-edu-portal-session-secret-development-default
type: fact
---
The education portal requires EDU_PORTAL_SESSION_SECRET in every environment, development included.

Modeled from REQ-education-edu-portal-session-secret-development-default so the claim can be checked for contradictions.
