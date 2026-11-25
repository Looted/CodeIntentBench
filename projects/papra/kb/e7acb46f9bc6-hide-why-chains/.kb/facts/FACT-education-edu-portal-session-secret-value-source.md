---
title: education.edu_portal_session_secret value_source = secret manager
status: active
fact_kind: property_value
subject_key: education.edu_portal_session_secret
property_key: value_source
operator: eq
value_type: string
value_string: secret manager
claim_key: CLAIM-3E5FE115417149EC
claim_text: The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development
text_ref: REQ-education-edu-portal-session-secret-source
tags:
  - lane:strict
  - knowledge-source:education-decisions
origin:
  kind: agent
  ref: 'Education programme portal notes: EDU-176'
  recorded_at: '2025-09-27T13:47:35.000Z'
id: FACT-education-edu-portal-session-secret-value-source
type: fact
---
The education portal reads EDU_PORTAL_SESSION_SECRET from the secret manager, with the environment as a fallback in development.

Modeled from REQ-education-edu-portal-session-secret-source so the claim can be checked for contradictions.
