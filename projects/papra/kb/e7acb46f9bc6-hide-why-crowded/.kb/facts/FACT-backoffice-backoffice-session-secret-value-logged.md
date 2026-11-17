---
title: backoffice.backoffice_session_secret value_logged = False
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: value_logged
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-637CF41C1DAE281D
claim_text: The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs
text_ref: REQ-backoffice-backoffice-session-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-357'
  recorded_at: '2025-11-20T08:22:51.000Z'
id: FACT-backoffice-backoffice-session-secret-value-logged
type: fact
---
The back office never writes BACKOFFICE_SESSION_SECRET or a value derived from it to its logs.

Modeled from REQ-backoffice-backoffice-session-secret-never-logged so the claim can be checked for contradictions.
