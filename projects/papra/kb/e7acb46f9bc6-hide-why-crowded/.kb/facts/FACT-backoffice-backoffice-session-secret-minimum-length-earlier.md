---
title: backoffice.backoffice_session_secret minimum_length = 12
status: deprecated
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: minimum_length
operator: eq
value_type: int
value_int: 12
claim_key: CLAIM-BA3A70E4D6B5FC0D
claim_text: BACKOFFICE_SESSION_SECRET must be at least 12 characters long
text_ref: REQ-backoffice-backoffice-session-secret-minimum-length-earlier
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-272'
  recorded_at: '2025-08-12T16:05:36.000Z'
id: FACT-backoffice-backoffice-session-secret-minimum-length-earlier
type: fact
---
BACKOFFICE_SESSION_SECRET must be at least 12 characters long.

Modeled from REQ-backoffice-backoffice-session-secret-minimum-length-earlier so the claim can be checked for contradictions.
