---
title: backoffice.backoffice_session_secret value_source = file or environment
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: value_source
operator: eq
value_type: string
value_string: file or environment
claim_key: CLAIM-47E5B25776D14AE6
claim_text: The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set
text_ref: REQ-backoffice-backoffice-session-secret-source
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-356'
  recorded_at: '2026-09-12T08:09:28.000Z'
id: FACT-backoffice-backoffice-session-secret-value-source
type: fact
---
The back office reads BACKOFFICE_SESSION_SECRET from a file named by BACKOFFICE_SESSION_SECRET_FILE when that variable is set.

Modeled from REQ-backoffice-backoffice-session-secret-source so the claim can be checked for contradictions.
