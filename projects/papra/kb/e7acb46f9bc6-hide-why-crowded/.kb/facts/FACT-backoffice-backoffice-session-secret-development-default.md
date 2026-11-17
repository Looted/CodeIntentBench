---
title: backoffice.backoffice_session_secret development_default = fixed development value
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: development_default
operator: eq
value_type: string
value_string: fixed development value
claim_key: CLAIM-F5ADB1E837972A02
claim_text: The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set
text_ref: REQ-backoffice-backoffice-session-secret-development-default
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-365'
  recorded_at: '2026-06-11T12:05:00.000Z'
id: FACT-backoffice-backoffice-session-secret-development-default
type: fact
---
The back office uses a fixed development value outside production when BACKOFFICE_SESSION_SECRET is not set.

Modeled from REQ-backoffice-backoffice-session-secret-development-default so the claim can be checked for contradictions.
