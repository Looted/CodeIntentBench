---
title: backoffice.backoffice_session_secret minimum_length = 32
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 32
claim_key: CLAIM-F567AE3F5BC22E75
claim_text: BACKOFFICE_SESSION_SECRET must be at least 32 characters long
text_ref: REQ-backoffice-backoffice-session-secret-minimum-length
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-342'
  recorded_at: '2026-01-02T12:08:07.000Z'
id: FACT-backoffice-backoffice-session-secret-minimum-length
type: fact
---
BACKOFFICE_SESSION_SECRET must be at least 32 characters long.

Modeled from REQ-backoffice-backoffice-session-secret-minimum-length so the claim can be checked for contradictions.
