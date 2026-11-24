---
title: backoffice.backoffice_session_secret required_in_production = False
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: required_in_production
operator: eq
value_type: bool
value_bool: false
claim_key: CLAIM-9E2CAEE40F11D732
claim_text: The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set
text_ref: REQ-backoffice-backoffice-session-secret-generated-when-missing
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-340'
  recorded_at: '2025-07-12T10:59:20.000Z'
id: FACT-backoffice-backoffice-session-secret-required-in-production
type: fact
---
The back office generates a random session signing secret at startup when BACKOFFICE_SESSION_SECRET is not set.

Modeled from REQ-backoffice-backoffice-session-secret-generated-when-missing so the claim can be checked for contradictions.
