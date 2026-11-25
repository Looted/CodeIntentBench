---
title: backoffice.backoffice_session_secret startup_log = presence only
status: active
fact_kind: property_value
subject_key: backoffice.backoffice_session_secret
property_key: startup_log
operator: eq
value_type: string
value_string: presence only
claim_key: CLAIM-2AB50BBAACA14801
claim_text: startup logs show only whether it is set
text_ref: REQ-backoffice-backoffice-session-secret-never-logged
tags:
  - lane:strict
  - knowledge-source:backoffice-decisions
origin:
  kind: agent
  ref: 'Papra Cloud back office handbook: OPS-357'
  recorded_at: '2025-11-20T08:22:51.000Z'
id: FACT-backoffice-backoffice-session-secret-startup-log
type: fact
---
Startup logs show only whether it is set.

Modeled from REQ-backoffice-backoffice-session-secret-never-logged so the claim can be checked for contradictions.
